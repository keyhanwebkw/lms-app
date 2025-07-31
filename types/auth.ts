export interface DataLayoutAuth {
    description: string;
    loading: boolean;
}

export interface VerifyPhoneReg {
    dataModel: DataModelVerify;
    code: number;
    mobile: number;
    statusDisabled: boolean;
    timer: string;
    msg: string;
    loading: boolean;
    result: any;
    resultResend: any;
    loadingResend: boolean;
}

interface DataModelVerify {
    num1: string | number;
    num2: string | number;
    num3: string | number;
    num4: string | number;
    num5: string | number;
    num6: string | number;
}

export interface SetPassState {
    dataModel: DataModelSetPass;
    loading: boolean;
    errField: string;
    result: any;
    description: string
}

export interface SetPassState {
    dataModel: DataModelSetPass
    dataError: DataModelErr
    loading: boolean
}

interface DataModelErr {
    password: string
    rePassword: string
}

interface DataModelSetPass {
    password: string;
    rePassword: string;
}

export interface DataListCardMultiType {
    dataList: DetailsCardMultiType;
}

interface DetailsCardMultiType {
    ID: string
    name: string
    family?: string
    avatarSID: string
}


// sendOTP Store
export interface SendOTPStoreState {
    dataModel: SendOTPStoreDataModel
    dataError: ErrSendOTPStoreState
    loading: boolean
}

interface ErrSendOTPStoreState {
    mobile: string
    countryCode: string
}

interface SendOTPStoreDataModel {
    mobile: string
    countryCode: string
}

// verify phone store
export interface VerifyPhoneState {
    dataModel: Record<string, number>
    code: string
    mobile: string
    statusDisabled: boolean
    timer: string
    msg: string
    loading: boolean
    loadingResend: boolean
}

// enter password store
export interface EnterPasswordState {
    dataModel: {
        password: string,
        mobile: string,
    },
    dataError: {
        password: string
        mobile: string
    }
    dataProfile: any,
    loading: boolean,
    loadingForget: boolean,
}

// set profile store 
export interface SetProfileState {
    dataModel: DataModelProfile
    dataError: ErrorsSetProfile
    loading: boolean
}

export interface DataModelProfile {
    name: string
    family: string
    nationalCode: string
    birthDate: number | string
    gender: 'male' | 'female'
    avatarSID: string
}

interface ErrorsSetProfile {
    name: string
    family: string
    nationalCode: string
    birthDate: string
    gender: string
}

export interface TypeLogoutState {
    resultLogout: any,
    loading: boolean,
    showPopup: boolean,
}