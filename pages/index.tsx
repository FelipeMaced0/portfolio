import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';
import styles from '@/styles/Home.module.css'
import Project from '@/components/project';
import WorkExperience from '@/components/workexperience';
import { getRepos, getStarGazers } from '@/services/githubInfo';
import { getWorkExperience } from '@/services/linkedinInfo';
import NavBar from '@/components/navbar';
const inter = Inter({ variable: '--inter-font', subsets: ['latin'] });


export default function Home({ repos, stargazers, workExperience }: { repos: { data: Array<object> }, stargazers: Array<any>, workExperience: { experience: Array<object> } }): JSX.Element {
  const mapstargazers: Map<any, any> = new Map(stargazers);

  return (
    <main className="h-screen">
      <div className="flex flex-col items-center gap-y-52 h-full min-h-screen">
        <NavBar />
        <div className="flex flex-col min-[925px]:flex-row gap-x-5 overflow-y-scroll min-[925px]:overflow-y-auto">
          <section className="w-[450px] h-[500px] mt-[40px] flex flex-col">
            <span className="p-5 bg-[#1B1B1B]"><h2>Work Experience</h2></span>
            <article className="w-full h-full flex flex-col items-center overflow-y-scroll border-l border-r border-b border-[#1B1B1B]">
              {
                workExperience?.experience.map((exp: any) => (
                  <WorkExperience
                    key={exp.title}
                    companyName={exp.companyName}
                    period={{ start: exp.timePeriod.startDate, end: exp.timePeriod.endDate }}
                    url={"#"}
                  />
                ))
              }
            </article>
          </section>
          <section className="w-[450px] h-[500px] mt-[40px] flex flex-col">
            <span className="p-5 bg-[#1B1B1B]"><h2>Projects</h2></span>
            <article className="w-full h-full flex flex-col items-center overflow-y-scroll border-l border-r border-b border-[#1B1B1B]">
              {
                repos?.data.filter((repo: any) => {
                  return mapstargazers?.get(repo.name)?.some((stargazer: any) => {
                    return stargazer.login === repo.owner.login;
                  }) || false;
                }).map((repo: any) => (
                  <Project
                    key={repo.name}
                    name={repo.name}
                    language={repo.language}
                    description={repo.description}
                    url={repo.svn_url}
                  />
                ))
              }
            </article>
          </section>
        </div>
      </div>
    </main>);
}

export async function getStaticProps() {

  const repos = await getRepos();
  const stargazers = [];
  var workExperience = { "certifications": [{ "authority": "Udemy", "company": { "active": true, "dashCompanyUrn": "urn:li:fsd_company:822535", "entityUrn": "urn:li:fs_miniCompany:822535", "logo": { "com.linkedin.common.VectorImage": { "artifacts": [{ "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "200_200/0/1626275253364?e=1697673600&v=beta&t=ZfSYwOHTZcxwqFM5E0QqM1mDTQnUzvCGTtZ_WXLcFuk", "height": 200, "width": 200 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "100_100/0/1626275253364?e=1697673600&v=beta&t=HFDwvvZWmiKPuA-QDq6GISmYcGKW2LBANIpHOOyGYvg", "height": 100, "width": 100 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "400_400/0/1626275253364?e=1697673600&v=beta&t=rXCqEJ7peZXy9BjjrY3z1ThQXjtYUOpUtr8cRnbU6iU", "height": 400, "width": 400 }], "rootUrl": "https://media.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_" } }, "name": "Udemy", "objectUrn": "urn:li:company:822535", "showcase": false, "trackingId": "qdt9m5hbQomw0SgoFEQdrg==", "universalName": "udemy" }, "companyUrn": "urn:li:fs_miniCompany:822535", "displaySource": "udemy.com", "licenseNumber": "UC-5d22c8d3-730d-49bf-9ea8-4e9b0df1416c", "name": "Flutter", "timePeriod": { "startDate": { "month": 1, "year": 2021 } }, "url": "https://www.udemy.com/certificate/UC-5d22c8d3-730d-49bf-9ea8-4e9b0df1416c/" }, { "authority": "EF Standard English Test (EF SET) ", "company": { "active": true, "dashCompanyUrn": "urn:li:fsd_company:13425355", "entityUrn": "urn:li:fs_miniCompany:13425355", "logo": { "com.linkedin.common.VectorImage": { "artifacts": [{ "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "200_200/0/1519902704390?e=1697673600&v=beta&t=N-v-rOUhVD_qFnCgGfqy__VjM5gc9VdTbb4Y3x5xrR8", "height": 200, "width": 200 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "100_100/0/1519902704390?e=1697673600&v=beta&t=ys_vfKscK0OKtGhksB45kVSDLZVU9y8Ex46u17U8HYY", "height": 100, "width": 100 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "400_400/0/1519902704390?e=1697673600&v=beta&t=YOSRB342W3sN2HjBh4rkv_jja-3qr-IwMH5q1bGGLgM", "height": 400, "width": 400 }], "rootUrl": "https://media.licdn.com/dms/image/C4D0BAQE0iRUqSJueUw/company-logo_" } }, "name": "EF Standard English Test (EF SET) ", "objectUrn": "urn:li:company:13425355", "showcase": false, "trackingId": "qtOzT+kyT4aZ5pvPkwqFqA==", "universalName": "efset" }, "companyUrn": "urn:li:fs_miniCompany:13425355", "displaySource": "efset.org", "licenseNumber": "4FBUQH", "name": "EF SET C2  PROFICIENT", "timePeriod": { "startDate": { "year": 2022 } }, "url": "https://www.efset.org/cert/4FBUQH" }, { "authority": "DIO", "company": { "active": true, "dashCompanyUrn": "urn:li:fsd_company:15157373", "entityUrn": "urn:li:fs_miniCompany:15157373", "logo": { "com.linkedin.common.VectorImage": { "artifacts": [{ "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "200_200/0/1671135501047?e=1697673600&v=beta&t=UhRVZdvN1Gh129Q1EZdSfdqscxdrR2bRKUzoxrPct8I", "height": 200, "width": 200 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "100_100/0/1671135501047?e=1697673600&v=beta&t=yfZWsO5rg90gRcX_qk46H3V3DGZKsHx1hLLIamj5BLk", "height": 100, "width": 100 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "400_400/0/1671135501047?e=1697673600&v=beta&t=a_jnTNBoFN6cRpnCxR9neTUkBPFigM0m_NymkIsGzek", "height": 400, "width": 400 }], "rootUrl": "https://media.licdn.com/dms/image/C4E0BAQHu3OWz_9erTA/company-logo_" } }, "name": "DIO", "objectUrn": "urn:li:company:15157373", "showcase": false, "trackingId": "F3hX2C1OQC28dsyX9zvIgA==", "universalName": "dio-makethechange" }, "companyUrn": "urn:li:fs_miniCompany:15157373", "licenseNumber": "CF580D97", "name": "Introduction to Git and Github", "timePeriod": { "startDate": { "month": 1, "year": 2021 } } }, { "authority": "Funda\u00e7\u00e3o Bradesco", "company": { "active": true, "dashCompanyUrn": "urn:li:fsd_company:586077", "entityUrn": "urn:li:fs_miniCompany:586077", "logo": { "com.linkedin.common.VectorImage": { "artifacts": [{ "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "200_200/0/1547486273811?e=1697673600&v=beta&t=FHFqOLjG5gsWE9Ac68eOr4CE4QTYbc4xQYgnYeVC9gw", "height": 200, "width": 200 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "100_100/0/1547486273811?e=1697673600&v=beta&t=YwDVeS2mIMw4nN8OI_ONi8x0bCRABOaZEtq8CDWQYIo", "height": 100, "width": 100 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "400_400/0/1547486273811?e=1697673600&v=beta&t=dhwWTQQOBvD1wUzyK2rdY7XICLrL6nsjHCB8JiOl90I", "height": 400, "width": 400 }], "rootUrl": "https://media.licdn.com/dms/image/C4E0BAQFOiaQvbDY3hQ/company-logo_" } }, "name": "Funda\u00e7\u00e3o Bradesco", "objectUrn": "urn:li:company:586077", "showcase": false, "trackingId": "pqdvxt40T5Gf97v9uxiarg==", "universalName": "fundacaobradesco" }, "companyUrn": "urn:li:fs_miniCompany:586077", "displaySource": "ev.org.br", "licenseNumber": "344D9780-7AC8-487C-B7D2-25C8E681DFDD", "name": "HTML - B\u00c1SICO", "timePeriod": { "startDate": { "month": 5, "year": 2023 } }, "url": "https://www.ev.org.br/validar-certificado" }, { "authority": "Funda\u00e7\u00e3o Bradesco", "company": { "active": true, "dashCompanyUrn": "urn:li:fsd_company:586077", "entityUrn": "urn:li:fs_miniCompany:586077", "logo": { "com.linkedin.common.VectorImage": { "artifacts": [{ "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "200_200/0/1547486273811?e=1697673600&v=beta&t=FHFqOLjG5gsWE9Ac68eOr4CE4QTYbc4xQYgnYeVC9gw", "height": 200, "width": 200 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "100_100/0/1547486273811?e=1697673600&v=beta&t=YwDVeS2mIMw4nN8OI_ONi8x0bCRABOaZEtq8CDWQYIo", "height": 100, "width": 100 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "400_400/0/1547486273811?e=1697673600&v=beta&t=dhwWTQQOBvD1wUzyK2rdY7XICLrL6nsjHCB8JiOl90I", "height": 400, "width": 400 }], "rootUrl": "https://media.licdn.com/dms/image/C4E0BAQFOiaQvbDY3hQ/company-logo_" } }, "name": "Funda\u00e7\u00e3o Bradesco", "objectUrn": "urn:li:company:586077", "showcase": false, "trackingId": "EcH0VXjKSwKkYHbWjrdapQ==", "universalName": "fundacaobradesco" }, "companyUrn": "urn:li:fs_miniCompany:586077", "displaySource": "ev.org.br", "licenseNumber": "EB69C1F3-3049-403D-9D7F-DF73E1D9C08B", "name": "INTRODU\u00c7\u00c3O AO JAVASCRIPT", "timePeriod": { "startDate": { "month": 5, "year": 2023 } }, "url": "https://www.ev.org.br/validar-certificado" }, { "authority": "Funda\u00e7\u00e3o Bradesco", "company": { "active": true, "dashCompanyUrn": "urn:li:fsd_company:586077", "entityUrn": "urn:li:fs_miniCompany:586077", "logo": { "com.linkedin.common.VectorImage": { "artifacts": [{ "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "200_200/0/1547486273811?e=1697673600&v=beta&t=FHFqOLjG5gsWE9Ac68eOr4CE4QTYbc4xQYgnYeVC9gw", "height": 200, "width": 200 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "100_100/0/1547486273811?e=1697673600&v=beta&t=YwDVeS2mIMw4nN8OI_ONi8x0bCRABOaZEtq8CDWQYIo", "height": 100, "width": 100 }, { "expiresAt": 1697673600000, "fileIdentifyingUrlPathSegment": "400_400/0/1547486273811?e=1697673600&v=beta&t=dhwWTQQOBvD1wUzyK2rdY7XICLrL6nsjHCB8JiOl90I", "height": 400, "width": 400 }], "rootUrl": "https://media.licdn.com/dms/image/C4E0BAQFOiaQvbDY3hQ/company-logo_" } }, "name": "Funda\u00e7\u00e3o Bradesco", "objectUrn": "urn:li:company:586077", "showcase": false, "trackingId": "oyBkwNWPSV+kn/OjD4cIuw==", "universalName": "fundacaobradesco" }, "companyUrn": "urn:li:fs_miniCompany:586077", "displaySource": "ev.org.br", "licenseNumber": "5C633DC6-54E6-4F5E-AC64-B6C70029DDDD", "name": "Inovando Com CSS", "timePeriod": { "startDate": { "month": 5, "year": 2023 } }, "url": "https://www.ev.org.br/validar-certificado" }], "displayPictureUrl": "https://media.licdn.com/dms/image/C4D03AQG14PXgpZFtTg/profile-displayphoto-shrink_", "education": [{ "degreeName": "Bachelor of  Information System", "entityUrn": "urn:li:fs_education:(ACoAADnwazwBz408vrzZOPfNYhiJ46bfelfRwEc,777788982)", "fieldOfStudy": "Computer Science", "fieldOfStudyUrn": "urn:li:fs_fieldOfStudy:100189", "school": { "active": true, "entityUrn": "urn:li:fs_miniSchool:374054", "logoUrl": "https://media.licdn.com/dms/image/C560BAQFnwX_AR9ShdA/company-logo_", "objectUrn": "urn:li:school:374054", "schoolName": "IFBA - Instituto Federal da Bahia", "trackingId": "SfKh9SbxTLSo0/KITYvMcg==" }, "schoolName": "IFBA - Instituto Federal da Bahia", "schoolUrn": "urn:li:fs_miniSchool:374054", "timePeriod": { "endDate": { "year": 2023 }, "startDate": { "year": 2018 } } }], "elt": true, "entityUrn": "urn:li:fs_profile:ACoAADnwazwBz408vrzZOPfNYhiJ46bfelfRwEc", "experience": [{ "company": { "employeeCountRange": { "end": 200, "start": 51 }, "industries": ["Higher Education"] }, "companyLogoUrl": "https://media.licdn.com/dms/image/C4D0BAQF2gfVEHXnOVA/company-logo_", "companyName": "UCAM PRO SABER", "companyUrn": "urn:li:fs_miniCompany:9445821", "description": "Responsible for rewriting an ERP for the company using the most recent stable version of Laravel and PHP. Simplifying the dependencies and generally modernizing the system as a whole.", "entityUrn": "urn:li:fs_position:(ACoAADnwazwBz408vrzZOPfNYhiJ46bfelfRwEc,2128542515)", "geoLocationName": "Feira de Santana, Bahia, Brazil", "geoUrn": "urn:li:fs_geo:106266533", "locationName": "Feira de Santana, Bahia, Brazil", "region": "urn:li:fs_region:(br,6413)", "timePeriod": { "startDate": { "month": 2, "year": 2023 } }, "title": "Web Developer" }, { "company": {}, "companyName": "FERRAMENTAS BAHIA LTDA", "companyUrn": "urn:li:fs_miniCompany:7217956", "description": "I've done web scraping with beautiful soup, python, and Selenium. Integration with Postgre database for product reference lookup. Wrote Python scripts to automate the process of renaming, compressing, and uploading.", "entityUrn": "urn:li:fs_position:(ACoAADnwazwBz408vrzZOPfNYhiJ46bfelfRwEc,1915262654)", "geoLocationName": "Feira de Santana, Bahia, Brazil", "locationName": "Feira de Santana, Bahia, Brazil", "timePeriod": { "endDate": { "month": 9, "year": 2022 }, "startDate": { "month": 10, "year": 2021 } }, "title": "Python Developer" }], "firstName": "Felipe", "geoCountryName": "Brazil", "geoCountryUrn": "urn:li:fs_geo:106057199", "geoLocation": { "geoUrn": "urn:li:fs_geo:106266533" }, "geoLocationBackfilled": false, "geoLocationName": "Feira de Santana, Bahia", "headline": "Full Stack Developer | PHP| Laravel | HTML | CSS | MySQL | Python | Linux", "honors": [], "img_100_100": "100_100/0/1653423586262?e=1695254400&v=beta&t=dBYkue_b2CDYmnQ4ILs2B86j9dstcEiPjJ5Ugd2wbe0", "img_200_200": "200_200/0/1653423586262?e=1695254400&v=beta&t=PnsfJtaMpdHpgRlFOmGwpIhMZz4yd8DIYWNgZL-0lwA", "img_400_400": "400_400/0/1653423586262?e=1695254400&v=beta&t=RZROi7dZ3VSDj5akoLIq26wP0A611QnPndXZSjzy7AA", "img_800_800": "800_800/0/1653423586262?e=1695254400&v=beta&t=29sRRVBq1Q-PRC4p48kNaOb_8DMcDhgqGD9w7sJYe9E", "industryName": "Computer Software", "industryUrn": "urn:li:fs_industry:4", "languages": [{ "name": "English", "proficiency": "PROFESSIONAL_WORKING" }, { "name": "Portuguese", "proficiency": "NATIVE_OR_BILINGUAL" }], "lastName": "Macedo", "location": { "basicLocation": { "countryCode": "br" } }, "locationName": "Brazil", "member_urn": "urn:li:member:972057404", "profile_id": "ACoAADnwazwBz408vrzZOPfNYhiJ46bfelfRwEc", "profile_urn": "urn:li:fs_miniProfile:ACoAADnwazwBz408vrzZOPfNYhiJ46bfelfRwEc", "projects": [], "public_id": "felipemaced0", "publications": [], "student": false, "summary": "Welcome to my LinkedIn profile!\n\nI am a programmer with a passion for coding and problem-solving. I have a strong foundation in programming languages such as Python, C, and Javascript , I am constantly learning new technologies and tools to stay up-to-date in this rapidly-evolving field.\n\nCheck out my GitHub Page: https://github.com/FelipeMaced0\nMy LeetCode Page: https://leetcode.com/sir_pi", "volunteer": [] };


  for (const repo of repos?.data) {
    const stargazer = await getStarGazers(repo.owner.login, repo.name);
    stargazers.push([repo.name, stargazer.data]);
  }

  return {
    props: {
      repos,
      stargazers,
      workExperience
    }
  };
}
