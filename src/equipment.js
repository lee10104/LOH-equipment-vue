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
    return this.data.type || 'life';
  }

  get part() {
    return this.data.part || 'weapon';
  }

  get grade() {
    return this.data.grade || 6;
  }

  get level() {
    return this.data.level || 15;
  }

  get mainOption() {
    return this.data.mainOption || {};
  }

  get subOptions() {
    return this.data.subOptions || [];
  }

  get format() {
    return {
      id: this.id,
      type: this.type,
      part: this.part,
      grade: this.grade,
      level: this.level,
      mainOption: this.mainOption,
      subOptions: this.subOptions
    };
  }

  updateOptions(mainOption, subOptions) {
    this.data.mainOption = mainOption;
    this.data.subOptions = subOptions;
  }
}

export default Equipment;
