export class Task {
    constructor(title, isChecked) {
        this.title = title;
        this.priority = 0;
        this.isChecked = isChecked
    }
    check() {
        this.isChecked = !this.isChecked
    }
};
