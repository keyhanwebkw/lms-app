
import type { DetailsStatus } from '~/types/global'

interface StatusData {
  styleData: string
  imgData: any
}

type HandelStatusType = Record<DetailsStatus, StatusData>

export const handelStatus: HandelStatusType = {
  accepted: {
    styleData: 'bg-green-300',
    imgData: "IconAccept",
  },
  rejected: {
    styleData: 'bg-red-500',
    imgData: "IconReject",
  },
  todo: {
    styleData: 'bg-orange-300',
    imgData: "IconTodo",
  },
  pending: {
    styleData: 'bg-orange-300',
    imgData: "IconPending",
  },
  resubmitted: {
    styleData: 'bg-red-500',
    imgData: "IconPending",
  },
  inProgress: {
    styleData: 'bg-blue-100',
    imgData: "IconPending",
  },
}
