import { LocalDataBaseService, JsonDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) { }

    async getPosts() {

        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}