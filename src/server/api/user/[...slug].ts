import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.get(
  '/test',
  defineEventHandler(() => 'Hello Test'),
)

router.get(
  '/test2',
  defineEventHandler(() => 'Hello Test 2'),
)

export default useBase('/api/hello', router.handler)
