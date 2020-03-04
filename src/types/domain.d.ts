
export interface Book{
  /** id */
  id: number;
  /** 书名 */
  name: string;
  author: number;
  summary: string;
  publishTime: number;
}

export interface BookCu extends Book{
  /** 发布时间 */
  _publishTimeLabel: string;
} 