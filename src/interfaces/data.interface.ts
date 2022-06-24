export class Data {
  constructor(
    public uuid: string = "",
    public name: string = "",
    public image?: string,
    public quantity?: number,
    public code?: string,
    public categories?: any[],
    public status?: boolean
  ) {}
}

export class DTO {
  constructor(
    public uuid: string = "",
    public data: Data[] = [],
    public storage: string = "data",
    public getDataStorage: any = () => {},
    public setValueEdit: any = {},
    public value: any = {},
    public setValue: any = {},
    public setData: any = [],
    public index: number = 0
  ) {}
}
