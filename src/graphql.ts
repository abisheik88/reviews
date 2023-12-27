
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateReview {
    rating: number;
    description: string;
    hotel_id: string;
}

export interface Review {
    id?: Nullable<string>;
    result?: Nullable<Nullable<Aaa>[]>;
}

export interface Aaa {
    id: string;
    rating?: Nullable<string>;
    description?: Nullable<string>;
    hotel_id?: Nullable<string>;
}

export interface IQuery {
    review(id: string): Nullable<Review> | Promise<Nullable<Review>>;
    reviews(): Nullable<Review[]> | Promise<Nullable<Review[]>>;
}

export interface IMutation {
    createReview(input?: Nullable<CreateReview>): Review | Promise<Review>;
}

type Nullable<T> = T | null;
