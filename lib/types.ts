export interface PostData {
    id: string;
    date: string;
    title: string;
    tags: string[];
    readingTime: string;
    contentHtml?: string;
    [key: string]: any;
}
