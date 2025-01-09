
const InitialtState = {
    animation: false,
}

export const ServiceCardAnimation = (state = InitialtState, action) => {
    switch (action.type) {
        case "START_ANIMATION":
            return { ...state, animation: action.payload }
        case "END_ANIMATION":
            return { ...state, animation: action.payload }

        default:
            return state
    }
}