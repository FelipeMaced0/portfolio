import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Octokit } from "octokit";
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import Project from '@/componets/project';
import ProInfo from '@/componets/project';
import { getRepos, getStarGazers } from '@/services/githubInfo';
import { OctokitResponse } from '@octokit/types';
import { resolve } from 'path';
import { stringify } from 'querystring';
import { createKey } from 'next/dist/shared/lib/router/router';

const inter = Inter({ subsets: ['latin'] })


export default function Home({ repos, stargazers }) {
  const mapstargazers: Map<any, any> = new Map(stargazers);

  console.log(mapstargazers);
  return (
    <div className={styles.main}>
      <header className={styles.header}><nav className={styles.navbar}>
        <a href='/about'>HELLO</a>
      </nav>
      </header>
      <div className={styles.projects}>
        <h2>Projects</h2>
        {
          repos?.data.filter((repo: any) => {
            return mapstargazers?.get(repo.name)?.some((stargazer: any) => {
              console.log(stargazer.login === repo.owner.login);
              return stargazer.login === repo.owner.login;
            }) || false;
          }).map((repo: any) => (
            <>
              <Project
                key={repo.name}
                name={repo.name}
                description={repo.description}
                url={repo.svn_url}
              />

            </>
          ))
        }
      </div>
    </div>);
}

export async function getStaticProps() {

  const repos = await getRepos();
  const stargazers = [];

  for (const repo of repos?.data) {
    const stargazer = await getStarGazers(repo.owner.login, repo.name);
    stargazers.push([repo.name, stargazer.data]);
  }

  return {
    props: {
      repos,
      stargazers,
    }
  };
}
