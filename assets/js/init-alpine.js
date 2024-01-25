function data() {
  function getThemeFromLocalStorage() {
    // if user already changed the theme, use it
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }

    // else return their preferences
    return (
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }

  function setThemeToLocalStorage(value) {
    window.localStorage.setItem('dark', value)
  }

  return {
    dark: getThemeFromLocalStorage(),
    toggleTheme() {
      this.dark = !this.dark
      setThemeToLocalStorage(this.dark)
    },
    isSideMenuOpen: false,
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen
    },
    closeSideMenu() {
      this.isSideMenuOpen = false
    },
    isNotificationsMenuOpen: false,
    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false
    },
    isProfileMenuOpen: false,
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false
    },
    isPagesMenuOpen: 0,
    togglePagesMenu(menuNumber) {
      this.isPagesMenuOpen = this.isPagesMenuOpen === menuNumber ? 0: menuNumber;
    },
    // Modal
    isModalOpen: false,
    trapCleanup: null,
    openModal() {
      this.isModalOpen = true
      this.trapCleanup = focusTrap(document.querySelector('#modal'))
    },
    closeModal() {
      this.isModalOpen = false
      this.trapCleanup()
    },
    visibleDiv: true,
    hiddenDiv1: false,
    hiddenDiv2: false,
    toggleDivs() {
      this.visibleDiv = !this.visibleDiv;
      this.hiddenDiv1 = !this.hiddenDiv1;
      this.hiddenDiv2 = !this.hiddenDiv2;
      
    },
    isPopupOpen: false,
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
    isPopupOpen: false,
    isNewPopupOpen: false,
    openNewPopup(){
      this.isPopupOpen = false;
      this.isNewPopupOpen = true;
    },
    closeNewPopup(){
      this.isNewPopupOpen = false;
    },
    closePopupAndOpenNewPopup() {
      this.isPopupOpen = false; // 기존 팝업 닫기
      this.isNewPopupOpen = true; // 새로운 팝업 열기
    },
    isSGPopupOpen: false,
    isNewSGPopupOpen: false,
    openSGPopup() {
      this.isSGPopupOpen = true;
    },
    closeSGPopup() {
      this.isSGPopupOpen = false;
    },
    openNewSGPopup(){
      this.isSGPopupOpen = false;
      this.isNewSGPopupOpen = true;
    },
    closeNewSGPopup(){
      this.isNewSGPopupOpen = false;
    },
    closeSGPopupAndOpenNewSGPopup() {
      this.isSGPopupOpen = false; // 기존 팝업 닫기
      this.isNewSGPopupOpen = true; // 새로운 팝업 열기
    },
    isColorPaletteOpen: false, // 팔레트가 열려있는지 여부를 나타내는 상태
    selectedColor: '',
    selectedColorIndex: null,
    // 팔레트를 토글하는 함수
    toggleColorPalette() {
      this.isColorPaletteOpen = !this.isColorPaletteOpen;
    },

    selectColor(color) {
      this.selectedColor = color;
      this.isColorPaletteOpen = false;
    },
    isColorSelected(color) {
      return this.selectColor === color;
    },
    isColorSelected(index) {
      return this.selectedColorIndex === index;
    },

  }
}
