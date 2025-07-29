export default (Alpine) => {
  Alpine.data("state", () => ({
    isOpen: false,
    toggle() {
      this.isOpen = !this.isOpen
    }
  }))
  Alpine.data("dropdown", () => ({
    isDrop: false,
    onChange() {
      this.isDrop = !this.isDrop
    }
  }))
}