// __mocks__/advApiMock.ts
export const fetchAdvApi = jest.fn().mockResolvedValue({
  eventId: 1,
  title: 'Mocked Event',
  description: 'Mocked Description'
});