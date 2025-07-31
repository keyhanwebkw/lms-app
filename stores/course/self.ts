import { defineStore } from "pinia";
import { GET_CONTENT_EPISODE_COURSE, GET_DETAILS_COURSE, GET_EPISODE_SECTION, GET_RELATED_COURSE } from "~/services/api/course";
import type { DataSelfState, DetailsEpisode, DetailsCourse, DataModelOpenEpisode } from "~/types/course";
import type { RelatedPostDataModel } from "~/types/global";
import { ToastMsg } from "~/stores/global/toast";
import { useComments } from "~/stores/global/comment";
import { useFaqs } from "~/stores/global/faq"
import { messages } from '../../static/messages';


export const selfCourse = defineStore("selfCourse", {
  state: () => <DataSelfState>({
    activeFaq: NaN,
    detailsCourse: {} as DetailsCourse,
    loading: true,
    loadingEpisode: true,
    activeEpisode: NaN,
    listEpisode: [],
    filteredEpisodes: [],
    lisRelated: [],
    loadingRelated: true,
    dataModelRelated: {} as RelatedPostDataModel,
    isFetchRelated: false
  }),

  actions: {

    clearDataCourse() {
      this.listEpisode = []
      this.lisRelated = []
      this.isFetchRelated = false
    },
    // active faq
    handleActiveFaq(id: number) {
      this.activeFaq = this.activeFaq === id ? NaN : id;
    },

    // get details course
    async getDataSelfCourse(slug: string) {
      this.loading = true;
      const { data, status } = await GET_DETAILS_COURSE(slug);
      if (status == 'success') {
        this.detailsCourse = data.course;
      }

      this.loading = false
    },

    // get episode

    async getEpisodeSection(ID: number) {
      const toastMessage = ToastMsg()
      if (ID === this.activeEpisode) {
        this.activeEpisode = NaN
        return
      }
      this.loadingEpisode = true;
      this.activeEpisode = ID;

      const existingEpisodes = this.listEpisode.filter((item: DetailsEpisode) => item.courseSectionID === ID);

      if (existingEpisodes.length > 0) {
        this.filteredEpisodes = existingEpisodes
      } else {
        const { data, status, error } = await GET_EPISODE_SECTION(ID);
        if (status == 'success') {
          this.listEpisode = this.listEpisode.concat(data.episodes)
          this.filteredEpisodes = this.listEpisode.filter((item: DetailsEpisode) => item.courseSectionID === ID);
        } else {
          toastMessage.ToastErrMsg({ message: error })
        }
      }
      this.loadingEpisode = false;
    },

    // get related course

    async getRelatedCourse(slug: string) {
      this.loadingRelated = true
      this.dataModelRelated = {
        slug: slug,
      }
      const { data, status } = await GET_RELATED_COURSE(this.dataModelRelated)
      if (status == "success") {
        this.lisRelated = data.courses
      }
      this.loadingRelated = false
      this.isFetchRelated = true
    },

    // handle open episode 

    async handleOpenEpisode(payload: DataModelOpenEpisode) {
      const toastMessage = ToastMsg()
      if (!payload.permission) {
        toastMessage.ToastErrMsg({ message: messages.notHaveAccessSection })
      } else {
        if (payload.type == 'content') {
          const dataContent = await GET_CONTENT_EPISODE_COURSE(payload.id)
        } else if (payload.type == 'assignment') {
          navigateTo({ name: 'course-slug-assignment-id___fa-IR', params: { id: payload.id } })
        } else if (payload.type == 'exam') {
          navigateTo({ name: 'course-slug-exam-id___fa-IR', params: { id: payload.id } })
        }
      }
    }
  }
});
