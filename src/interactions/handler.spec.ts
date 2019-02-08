import { ERROR_RESPONSE, ISlackClientChatMessage } from '../client';
import { handler } from './handler';
import { IInteractionsPayload } from './IInteractionsPayload';

describe('interactions - handler', () => {

  it('should throw error', async () => {

    const mockInteractionFunction = jest.fn().mockImplementation(() => {
      throw new Error();
    });

    const mockResponder = jest.fn();
    const mockPayload = {};

    // mock out error output
    console.error = jest.fn();

    const testHandler = handler(mockInteractionFunction);
    testHandler(mockPayload as any, mockResponder);

    // expect mock interaction function to be called with payload
    expect(mockInteractionFunction).toBeCalledWith(mockPayload);

    // expect mock responder to be called with error message
    expect(mockResponder).toBeCalledWith(ERROR_RESPONSE());

  });
});
