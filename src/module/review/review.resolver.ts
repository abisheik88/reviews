import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveReference,
} from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { CreateReviewInput } from './dto/create-review.input';
// import { UpdateReviewInput } from './dto/update-review.input';

@Resolver('Review')
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation('createReview')
  create(@Args('input') createReviewInput: CreateReviewInput) {
    return this.reviewService.create(createReviewInput);
  }

  @Query('reviews')
  findAll() {
    // return this.reviewService.findAll();
  }

  @Query('review')
  findOne(@Args('id') id: number) {
    return this.reviewService.findOne(id);
  }

  @ResolveReference()
  async derf(b: { __typename: string; id: string }) {
    const a = await this.reviewService.findAll(b.id);
    return a;
  }

  // @Mutation('updateReview')
  // update(@Args('updateReviewInput') updateReviewInput: UpdateReviewInput) {
  //   return this.reviewService.update(updateReviewInput.id, updateReviewInput);
  // }

  // @Mutation('removeReview')
  // remove(@Args('id') id: number) {
  //   return this.reviewService.remove(id);
  // }
}
