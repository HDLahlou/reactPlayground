import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
       <p>This is the about page</p>
    </Layout>
)

// Method 1
// import withLayout from '../lib/layout'
//
// const Page = () => (
//   <p>This is the about page</p>
// )
// 
// export default withLayout(Page)

// Method2
// const Page = () => (
//   <p>This is the about page</p>
// )
//
// export default () => (<Layout page={Page}/>)

// Method 3
// const content = (<p>This is the about page</p>)
//
// export default () => (<Layout content={content}/>)
