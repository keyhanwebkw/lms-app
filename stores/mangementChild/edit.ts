import { ConvertTimestampToDate } from "~/func/GenerateDate";
import { GET_INFO_CHILD } from "~/services/api/managementChild";
import type { UserProfileModel, UserProfileState } from "~/types/myAccount";


export const ChildProfile = defineStore('ChildProfile', {
    state: () => <UserProfileState>({
        profile: {} as UserProfileModel,
        loading: true,
        popup: false,

    }),
    actions: {
        async clearDataProfile() {
            this.profile = {
                name: '',
                gender: 'male',
                family:'',
                birthDate: NaN,
                nationalCode: '',
                avatarSID: {
                    SID: '',
                    extension: '',
                    fullSID: '',
                    fileName: '',
                    fileSize: 0,
                    fileType: '',
                    width: 0,
                    height: 0,
                    duration: 0
                }
            },
                this.popup = false
        },
        async getChildProfile(ID: number) {
            this.loading = true
            const { data } = await GET_INFO_CHILD(ID)
            this.profile = { ...data.child }
            this.loading = false
        },

        changeAvatar(SID: string) {
            this.profile.avatarSID.fullSID = SID
            this.popup = false
        },


    }
})