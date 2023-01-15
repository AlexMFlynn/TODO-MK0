

export interface TaskProps {
    title: string;
    description: string;
    key: string;
};

export function Task({
    title,
    description
}: TaskProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};