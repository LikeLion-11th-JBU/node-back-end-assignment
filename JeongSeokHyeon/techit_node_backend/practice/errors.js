try {
  throw new Error()
} catch (error) {
  console.log('에러 발생')
  console.log(error)
} finally {
  console.log('무조건 실행')
}
