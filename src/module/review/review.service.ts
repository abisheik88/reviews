import { Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
// import { UpdateReviewInput } from './dto/update-review.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly review: Repository<Review>,
  ) {}
  async create(createReviewInput: CreateReviewInput) {
    return await this.review.save(createReviewInput);
  }

  async findAll(id) {
    const a = await this.review.find({
      where: {
        hotel_id: id,
      },
    });
    console.log(a);
    return { result: a };
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  // update(id: number, updateReviewInput: UpdateReviewInput) {
  //   return `This action updates a #${id} review`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} review`;
  // }
}
