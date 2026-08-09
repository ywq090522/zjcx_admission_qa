import { Layout } from '@/components'
import styles from './About.module.scss'

function About() {
  return (
    <>
      <Layout>
        <div className={styles.about}>
          <section className={styles.brand}>
            { /* TODO: 展示项目icon 名字 */}
          </section>

          <section className={styles.contact}>
            { /* TODO: 管理员邮箱 & 招生热线/微信 */}
          </section>

          <section className={styles.acknowledgments}>
            { /* TODO: 开源项目使用列表 */}
          </section>

          <section className={styles.legal}>
            { /* TODO: ICP备案号 粤公安备案号 版权声明 */}
          </section>
        </div>
      </Layout>
    </>
  )
}

export default About