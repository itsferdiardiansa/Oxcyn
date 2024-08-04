import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Answer, AnswerDocument } from './schema/answer.models'
import { Model } from 'mongoose'
import {
  Question,
  QuestionDocument,
} from '@/models/question/schema/question.models'
import { BaseAnswerInput } from './dto/base-answer.input'
import { updateAnswerInput } from './dto/update-answer.input'

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>
  ) {}

  find() {
    return this.answerModel.find().populate('question')
  }

  async create({ question, text }: BaseAnswerInput) {
    const selectedQuestion = await this.questionModel.findById(question)

    if (!selectedQuestion)
      throw new NotFoundException(`Question with id: ${question} is not found!`)

    return this.answerModel.create({ question, text })
  }

  async update({ id, ...restData }: updateAnswerInput) {
    const selectedQuestion = await this.questionModel.findById(
      restData.question
    )

    if (!selectedQuestion)
      throw new NotFoundException(
        `Question with id: ${restData.question} is not found!`
      )

    return this.answerModel.findByIdAndUpdate(
      id,
      {
        $set: {
          ...restData,
          lastUpdated: new Date(),
        },
      },
      { new: true }
    )
  }

  async delete(id: string): Promise<{ deletedCount: number }> {
    const selectedAnswer = await this.answerModel.findById(id)

    if (!selectedAnswer)
      throw new NotFoundException(`Answer with id: ${id} is not found!`)

    return await this.answerModel.deleteOne({ _id: id })
  }
}
