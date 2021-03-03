export interface ISettings{
    type:Array<string>,
    cuisine:Array<string>,
    diet:Array<string>,
    intolerance:Array<string>
  }
  export interface ISettingsChecked{
    type:Array<string>,
    cuisine:Array<string>,
    diet:Array<string>,
    intolerance:Set<string>,
    autocomplete?:string
  }
