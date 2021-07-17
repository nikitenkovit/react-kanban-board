export enum Text {
  EMPTY_TASK = `Перетащите карточку`,
  EMPTY_BASKET = `Корзина пуста`,
  NEW_TASK = `Новая задача`,
}
export const Status = {
  BACKLOG: `backlog`,
  PROCESSING: `processing`,
  DONE: `done`,
  BASKET:`basket`,
};
export const StatusLabel = {
  [Status.BACKLOG]: `Бэклог`,
  [Status.PROCESSING]: `В процессе`,
  [Status.DONE]: `Готово`,
  [Status.BASKET]: `Корзина`,
};
export const STATE_EMPTY: string = `empty`;
export const MIN_TITLE_LENGTH: number = 2;
export const TASK_ACTIVE_CLASS: string = `task--active`;
export const HIDE_BLOCK_CLASS: string = `hidden-block`;
