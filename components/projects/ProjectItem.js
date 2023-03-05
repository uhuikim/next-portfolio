import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ data }) => {
    const [mounted, setMounted] = useState(false);

    const {
        properties: { Name, GitHub, Youtube, Description, Tags, WorkPeriod, URL },
    } = data;

    const title = Name.title[0]?.plain_text;
    const github = GitHub?.url;
    const youtube = Youtube?.url;
    const description = Description.rich_text[0]?.plain_text;
    const imgSrc = data.cover.file?.url || data.cover.external.url || "";
    const tags = Tags.multi_select;
    const start = WorkPeriod.date?.start;
    const end = WorkPeriod.date?.end;

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start?.split("-");
        const endDateStringArray = end?.split("-");

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);
        return result;
    };

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        mounted && (
            <div className="project-card">
                <a href={URL.url} target="_blank" rel="noopener noreferrer">
                    <Image className="rounded-t-xl" src={imgSrc} alt="cover image" width="100%" height="50%" layout="responsive" objectFit="cover" quality={100} />
                    <div className="p-4 flex flex-col">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <h3 className="mt-4 text-xl">{description}</h3>
                        {github && (
                            <a rel="noopener noreferrer" target="_blank" href={github}>
                                깃허브 바로가기
                            </a>
                        )}
                        {youtube && (
                            <a rel="noopener noreferrer" target="_blank" href={youtube}>
                                유튜브 시연영상 보러가기
                            </a>
                        )}
                        <p className="my-1 ">
                            작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                        </p>
                        <div className="flex items-start mt-2">
                            {tags.map((aTag) => (
                                <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>
                                    {aTag.name}
                                </h1>
                            ))}
                        </div>
                    </div>
                </a>
            </div>
        )
    );
};

export default ProjectItem;
