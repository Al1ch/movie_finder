export type Movie = {
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: number;
    id: number;
    overview: string;
    vote_count: number;
    genre_ids: number[];
};


export type MovieDetails = {
    genres: { id: number; name: string }[];
    runtime: number;
}
