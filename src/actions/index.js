export const selectLibrary = (libraryId) => {
    return {
        type: 'selecy_library',
        payload: libraryId
    };
}