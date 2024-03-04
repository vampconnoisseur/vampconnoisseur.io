const { db } = require('@vercel/postgres');
const { projectsData } = require('../src/app/lib/placeholder-data.js');

async function seedProjects(client) {
    try {
        await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        projectName VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        images TEXT[] NOT NULL,
        techStack TEXT[] NOT NULL,
        github TEXT
      );
    `;

        console.log(`Created "projects" table`);

        const insertedProjects = await Promise.all(
            projectsData.map(async (project) => {
                return client.sql`
          INSERT INTO projects (projectName, description, images, techStack, github)
          VALUES (${project.projectName}, ${project.description}, ${project.images}, ${project.techStack}, ${project.github})
          RETURNING *;
        `;
            }),
        );

        console.log(`Seeded ${insertedProjects.length} projects`);

        return insertedProjects;
    } catch (error) {
        console.error('Error seeding projects:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();
    await seedProjects(client);
    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
