import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import {  CreateAnswerUseCase } from './answer-question'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: CreateAnswerUseCase

describe('Answer a question', () => {
  beforeAll(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new CreateAnswerUseCase(inMemoryAnswersRepository)
  })

  it('should be able to create an answer', async () => {
  
    const { answer } = await sut.execute({
      instructorId: '1',
      questionId: '1',
      content: 'Nova resposta',
    })
  
    expect(answer.content).toEqual('Nova resposta')
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })

})

