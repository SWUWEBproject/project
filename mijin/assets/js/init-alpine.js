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
    isPagesMenuOpen: false,
    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen
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
    
    visableDiv1: true,
    visableDiv2: true,
    hiddenDiv1: false,
    handleButtonClick1() {
      this.visableDiv2 = !this.visableDiv2;
      this.hiddenDiv1 = !this.hiddenDiv1;

    },

    visableDiv1: true,
    visableDiv2: true,
    hiddenDiv2: false,
    handleButtonClick2() {
      this.visableDiv2 = !this.visableDiv2;
      this.hiddenDiv2 = !this.hiddenDiv2;

    },

    visableDiv1: true,
    visableDiv2: true,
    hiddenDiv3: false,
    handleButtonClick3() {
      this.visableDiv2 = !this.visableDiv2;
      this.hiddenDiv3 = !this.hiddenDiv3;

    },

    visableDiv1: true,
    visableDiv2: true,
    hiddenDiv4: false,
    handleButtonClick4() {
      this.visableDiv2 = !this.visableDiv2;
      this.hiddenDiv4 = !this.hiddenDiv4;

    },

    visableDiv1: true,
    visableDiv2: true,
    hiddenDiv5: false,
    handleButtonClick5() {
      this.visableDiv2 = !this.visableDiv2;
      this.hiddenDiv5 = !this.hiddenDiv5;

    },

    visableDiv3: true,
    hiddenDiv6: false,
    GetIDClick1() {
      this.visableDiv3 = !this.visableDiv3;
      this.hiddenDiv6 = !this.hiddenDiv6;

    },
  }
}
