export type SkillsProps = {
    name: string;
    img: string;
    id: number;
};

export type HobbiesProps = SkillsProps & {
    description: string;
};

export type TrainingProps = HobbiesProps;

export type ProjectsProps = {
    name: string;
    img: string;
    tools: {
        tool: string;
        ico: string;
    }[];
    url: string;
    id: number;
};