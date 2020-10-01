class Equipment {
  constructor(data) {
    if (data)
      this.data = data;
    else
      this.data = {};
  }

  get id() {
    return this.data.id;
  }

  get type() {
    return this.data.type;
  }

  get part() {
    return this.data.part;
  }

  get grade() {
    return this.data.grade;
  }

  get level() {
    return this.data.level;
  }

  get mainOption() {
    return this.data.mainOption || {};
  }

  get subOptions() {
    return this.data.subOptions || [];
  }

  updateOptions(mainOption, subOptions) {
    this.data.mainOption = mainOption;
    this.data.subOptions = subOptions;
  }
}

export default Equipment;
