beforeEach(() =>{
    describe('receives data from Github', () => {
        test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
            fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
            render(<App />)
            const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
            expect(gitHubName).toHaveTextContent('coder')
          })
        
    })
})