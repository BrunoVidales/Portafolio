export type SkillsProps = {
    name: string,
    img: string,
    id: number
};

export type HobbiesProps = SkillsProps & {
    description: string,
};

export type TrainingProps = HobbiesProps;