import { gql, useQuery } from '@apollo/client'

export const GET_PEOPLE = gql`
  query GetPeople($filter: String!, $from: ID, $limit: Int) {
    countPeople(filter: $filter)
    people(filter: $filter, from: $from, limit: $limit) {
      id
      createdAt
      fullName
      profilePicture
      status
    }
  }
`

export type PeopleStatus = 'PROTECTED' | 'VULNERABLE'

export type People = {
  createdAt: string
  fullName: string
  id: string
  profilePicture: string
  status: PeopleStatus
}

export interface GetPeopleData {
  countPeople: number
  people: People[]
}

export function usePeople({
  filter,
  page,
  limit,
  skip,
}: {
  filter: string
  page?: number
  limit?: number
  skip?: boolean
}) {
  return useQuery<GetPeopleData>(GET_PEOPLE, {
    variables: {
      filter,
      page,
      limit,
    },
    skip,
  })
}
