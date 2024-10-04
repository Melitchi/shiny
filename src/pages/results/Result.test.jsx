import { formatJobList, formatQueryParams } from './Result'

describe('Test formatJobList', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('Test de formatQueryParam', () => {
  it('should transform object to string', () => {
    const expectedState = 'a1=true'
    expect(formatQueryParams({ 1: true })).toEqual(expectedState)
  })
  it('should add "&" between parameters', () => {
    const expectedState = 'a1=true&a2=false&a3=true'
    expect(formatQueryParams({ 1: true, 2: false, 3: true })).toEqual(
      expectedState,
    )
  })
  it('should return an empty string', () => {
    const expectedState = ''
    expect(formatQueryParams({})).toEqual(expectedState)
  })
})
