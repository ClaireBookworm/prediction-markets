# Next JS and Prisma!

This is a test of merging prisma and next js.

Hopefully we can use this for the **prediction markets** in SPARC! 

To test, you'll need a heroku postgreSQL database, you can follow this [guide](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1).
To run the prisma file do `npx prisma studio`, but make sure you have  a `.env` file in your local folder containing the URL to your Heroku database. 

If you're confused, follow these setup steps at [here](https://vercel.com/guides/nextjs-prisma-postgres).

Currently I know it's a blog, but it's quite easy to fix that! If you know anything about databases that'd be wonderful, as Prisma studio is confusing me.

-----
To run Prisma studio, run `npx prisma studio`, and to update the db `npx prisma db push`. 
Run `npm run dev` to run the next app itself.