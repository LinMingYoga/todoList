const defaultState = {
  placeholder: 'Write Something',
  list: [
    {
      id: 1,
      type: '躺式采耳',
    },
    {
      id: 2,
      type: '刮痧',
    },
    {
      id: 3,
      type: '足浴',
    },
  ],
} // 默认数据
export default (state = defaultState, action) => {
  return state
}