import { gql, useQuery } from '@apollo/client'

export const PEOPLE_BY_PAGE = gql`
  query PeopleByPage($filter: String!, $page: Int, $limit: Int) {
    countPeople(filter: $filter)
    peopleByPage(filter: $filter, page: $page, limit: $limit) {
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

export interface PeopleByPageData {
  countPeople: number
  peopleByPage: People[]
}

export function usePeopleByPage({
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
  return useQuery<PeopleByPageData>(PEOPLE_BY_PAGE, {
    variables: {
      filter,
      page,
      limit,
    },
    skip,
  })
}
