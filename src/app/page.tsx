'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const pathname = usePathname()
  
  const navItems = [
    { name: '智能问答', path: '#qa' },
    { name: '网页介绍', path: '#assignments' },
    { name: '作业展示', path: '#reflections' },
    { name: '所学感悟', path: '#experience' }
  ];

  useEffect(() => {
    const fetchWakaTimeStats = async () => {
      try {
        const mockData = { data: { total_seconds: 36240 } };
        const totalSeconds = mockData.data?.total_seconds;
        if (totalSeconds) {
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const duration = `${hours} 小时 ${minutes} 分钟`;
          const element = document.getElementById('wakatime-stats');
          if (element) element.textContent = duration;
        } else {
          const element = document.getElementById('wakatime-stats');
          if (element) element.textContent = '数据不可用';
        }
      } catch (error) {
        console.error('WakaTime数据获取失败:', error);
        const element = document.getElementById('wakatime-stats');
        if (element) element.textContent = '数据加载失败';
      }
    };

    fetchWakaTimeStats()
  }, [])

  return (
    <>
      <Head>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }
        `}</style>
      </Head>

      <div style={{
        padding: '40px',
        backgroundColor: '#ffe5f4', // 修改为浅粉色
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFB6C1', // 修改为深粉色
          padding: '15px 30px',
          borderRadius: '8px',
          marginBottom: '30px',
          position: 'sticky',
          top: '20px',
          zIndex: 100
        }}>
          <h1 style={{ 
            color: 'red', 
            fontSize: '2rem',
            margin: 0,
            textShadow: '0 0 5px rgba(219, 168, 178, 0.99)'
          }}>❗ web期末展示 ❗</h1>
          
          <nav>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '20px'
            }}>
               <p style={{
    color: 'white',
    fontSize: '0.9rem',
    marginTop: '10px',
    textAlign: 'center',
    width: '100%',
    opacity: 0.8
  }}>
    ※ 点击导航菜单可跳转至对应板块
  </p>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    style={{
                      color: pathname === item.path ? 'red' : 'white',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: pathname === item.path ? 'bold' : 'normal',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      backgroundColor: pathname === item.path ? '#444' : 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
           {/* 内容区域 */}
      <main style={{ 
        flex: 1,
        marginTop: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(245, 139, 195, 0.79)'
      }}>
        {/* 搜索表单 */}
        <p>智能问答</p>
        <section id="qa" style={{ 
  marginBottom: '30px',
  padding: '20px'
}}></section>
          <section style={{ 
          marginBottom: '30px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px'
        }}>
          <iframe
            src="https://ai.youdao.com/saas/qanything/#/home"
            style={{
              width: '100%',
              height: '600px',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            title="智能问答系统"
          />
        </section>

        {/* 欢迎板块 */}
        <section id="assignments" style={{
  padding: '25px',
}}></section>
        <section style={{ 
          marginBottom: '30px',
          padding: '25px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          borderLeft: '4px solidzz #0070f3'
        }}>
          <h2 style={{ 
            color: '#333', 
            marginTop: 0,
            fontSize: '1.8rem',
            fontWeight: 600,
            marginBottom: '15px'
          }}>欢迎来到Web期末展示</h2>
          <p style={{ 
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>我将在这里展示我的过程性作业{pathname || '首页'}</p>
          <ul style={{ 
            paddingLeft: '25px',
            listStyleType: 'circle',
            color: '#444',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}>
            <li>首页设计与开发</li>
            <li>GitHub仓库展示</li>
            <li>github提交记录</li>
            <li>wakatime使用时长</li>
            <li>css盒模型与布局</li>
            <li>next.js全栈开发</li>
          </ul>
        </section>
          {/* 优化后的HTML练习部分 */}
          <section id="reflections" style={{
  padding: '25px',
}}></section>
          <section style={{
            padding: '25px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#333',
              borderBottom: '2px solid #ddd',
              paddingBottom: '10px'
            }}>首页设计与开发</h2>
            
            <div style={{ padding: '15px' }}>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                以下是使用HTML和CSS的基础知识,完成的首页设计与开发
              </p>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {/* 基础知识板块 */}
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>HTML基础</h3>
                  <ul style={{ 
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    color: '#555'
                  }}>
                    <li>HTML5文档结构</li>
                    <li>常用标签使用</li>
                    <li>表单元素</li>
                    <li>语义化标签</li>
                  </ul>
                </div>

                {/* CSS样式板块 */}
                <div style={{ 
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>CSS样式</h3>
                  <ul style={{ 
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    color: '#555'
                  }}>
                    <li>盒模型与布局</li>
                    <li>Flexbox布局</li>
                    <li>Grid布局</li>
                    <li>响应式设计</li>
                  </ul>
                </div>

                {/* 可点击的实战练习板块 */}
                <Link 
                  href="http://127.0.0.1:5500/index.html" 
                  style={{ 
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                <div style={{ 
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  transform: 'translateY(0)', // 初始化transform值
}} 
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  }}
>
<div style={{
  height: '180px',
  backgroundColor: '#f5f5f5',
  borderRadius: '6px',
  marginBottom: '15px',
  overflow: 'hidden',
  position: 'relative'
}}>
  <img 
    src="/images/屏幕截图 2025-03-29 211326.png"
    alt="首页设计预览"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '6px'
    }}
  />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                      }}>
                        [首页设计与开发]
                      </div>
                    </div>
                    <h3 style={{ 
                      marginTop: 0,
                      color: '#0070f3',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      首页设计
                      <span style={{ 
                        marginLeft: 'auto',
                        fontSize: '0.9rem',
                        fontWeight: 'normal'
                      }}>→</span>
                    </h3>
                    <p style={{ 
                      marginBottom: 0,
                      color: '#666'
                    }}>
                      点击查看完整的首页设计页面
                    </p>
                  </div>
                </Link>
                
              </div>
            </div>
          </section>
 {/* 首页设计与开发板块... */}

          {/* 新增GitHub使用时长板块 */}
          <section style={{
            padding: '25px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#333',
              borderBottom: '2px solid #ddd',
              paddingBottom: '10px'
            }}>GitHub仓库展示</h2>
            
            <div style={{ padding: '15px' }}>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                以下是我的GitHub库展示
              </p>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {/* 代码提交统计 */}
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>仓库内容</h3>
                  <ul style={{ 
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    color: '#555'
                  }}>
                    <li>首页设计</li>
                    <li>网页设计</li>
                    <li>css练习</li>
                    <li>javascrpt练习</li>
                  </ul>
                </div>
                
                <div style={{ 
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>仓库展示</h3>
                  <div style={{
                    height: '150px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999'
                  }}>
                    点击查看仓库展示
                  </div>
                {/* 代码提交统计 */}
<Link 
  href="https://github.com/Han1211854/webzuoye" 
  style={{ 
    textDecoration: 'none',
    color: 'inherit'
  }}
>
  <div style={{
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)'
  }} 
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  }}>
    <h3 style={{ 
      marginTop: 0,
      color: '#0070f3',
      display: 'flex',
      alignItems: 'center'
    }}>
      仓库展示
      <span style={{ 
        marginLeft: 'auto',
        fontSize: '0.9rem',
        fontWeight: 'normal'
      }}>→</span>
    </h3>
    {/* 原有统计列表保持不变 */}
  </div>
</Link>
<div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
       <img 
  src="/images/屏幕截图 2025-06-27 150445.png" 
  alt="GitHub仓库截图"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '6px',
            marginBottom: '15px'
          }}
        />
        </div>
                </div>
              </div>
            </div>
          </section>
          
          <section style={{
            padding: '25px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#333',
              borderBottom: '2px solid #ddd',
              paddingBottom: '10px'
            }}>github提交记录展示</h2>
            
            <div style={{ padding: '15px' }}>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                以下是我的github提交记录展示
              </p>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {/* 基础知识板块 */}
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>提交次数</h3>
                  <ul style={{ 
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    color: '#555'
                  }}>
                    <li>9次</li>
                  </ul>
                </div>

                {/* CSS样式板块 */}
                <div style={{ 
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>提交时间</h3>
                  <ul style={{ 
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    color: '#555'
                  }}>
                    <li>最早:2025-03-14</li>
                    <li>最晚:2025-06-28</li>
                  </ul>
                </div>

                {/* 可点击的实战练习板块 */}
                <Link 
                  href="http://127.0.0.1:5500/biaoge.html" 
                  style={{ 
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                <div style={{ 
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  transform: 'translateY(0)', // 初始化transform值
}} 
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  }}
>
                    <div style={{
                      height: '180px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '6px',
                      marginBottom: '15px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <img 
  src="/images/屏幕截图 2025-06-27 182117.png"  
  alt="预览图"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '6px'
    }}
  />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                      }}>
                        [GitHub提交记录]
                      </div>
                    </div>
                    <h3 style={{ 
                      marginTop: 0,
                      color: '#0070f3',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      提交记录
                      <span style={{ 
                        marginLeft: 'auto',
                        fontSize: '0.9rem',
                        fontWeight: 'normal'
                      }}>→</span>
                    </h3>
                    <p style={{ 
                      marginBottom: 0,
                      color: '#666'
                    }}>
                      点击查看完整的提交记录
                    </p>
                  </div>
                </Link>
                <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
       <img 
  src="/images/屏幕截图 2025-06-27 150445.png" 
  alt="GitHub仓库截图"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '6px',
            marginBottom: '15px'
          }}
        />
        </div>
              </div>
            </div>
          </section>
 {/* 新增GitHub使用时长板块 */}
 <section style={{
            padding: '25px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#333',
              borderBottom: '2px solid #ddd',
              paddingBottom: '10px'
            }}>wakatime使用时长</h2>
            
            <div style={{ padding: '15px' }}>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                以下是我的wakatime使用时长展示
              </p>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {/* 代码提交统计 */}
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>截止6.27 10 hrs 4 mins over the Last 7 Days in webzuoye under all branches. 
.</h3>
                  <ul style={{ 
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    color: '#555'
                  }}>
                    <li>4 hrs 23 mins	src/app/page.tsx</li>
                    <li>24 mins	my-app/src/app/layout.js</li>
                    <li>24 mins	ido/src/app/page.js</li>
                  </ul>
                </div>
                <div style={{ 
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{ 
                    marginTop: 0,
                    color: '#333',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px'
                  }}>时长展示</h3>
                  <div style={{
                    height: '150px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999'
                  }}>
                    点击查看时长展示
                  </div>
                {/* 代码提交统计 */}
<Link 
  href="https://wakatime.com/projects/webzuoye" 
  style={{ 
    textDecoration: 'none',
    color: 'inherit'
  }}
>
  <div style={{
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)'
  }} 
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  }}>
    <h3 style={{ 
      marginTop: 0,
      color: '#0070f3',
      display: 'flex',
      alignItems: 'center'
    }}>
      时长展示
      <span style={{ 
        marginLeft: 'auto',
        fontSize: '0.9rem',
        fontWeight: 'normal'
      }}>→</span>
    </h3>
    {/* 原有统计列表保持不变 */}
  </div>
</Link>

                </div>
              </div>
            </div>
          </section>
          {/* GitHub仓库展示板块... */}

          {/* 带图片的CSS盒模型与布局板块 */}
<section style={{
  padding: '25px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  marginBottom: '30px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
}}>
  <h2 style={{ 
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#2c3e50',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px'
  }}>CSS盒模型与布局</h2>
  
  <div style={{ 
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
    padding: '15px'
  }}>
    {/* 卡片1 - Flexbox */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示1.png"  // 修正为正确的public路径
        alt="Flexbox布局示例"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>导航行展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['这是本次作业的导航展示'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    
    {/* 卡片2 - Grid */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示2.png"  // 修正为正确的public路径
        alt="跳转页面展示"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>跳转页面展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['这是本次作业中的跳转页面展示'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* 带图片的CSS盒模型与布局板块 */}
<section style={{
  padding: '25px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  marginBottom: '30px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
}}>
  <h2 style={{ 
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#2c3e50',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px'
  }}>next.js全栈开发</h2>
  
  <div style={{ 
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '25px',
    padding: '15px'
  }}>
    {/* 卡片1 - Flexbox */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示1.png"  // 修正为正确的public路径
        alt="作业展示"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>作业展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['页面展示一'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    
    {/* 卡片2 - Grid */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示2.png"  // 修正为正确的public路径
        alt="Grid布局示例"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>作业展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['页面展示二'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    {/* 卡片3 - Grid */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示3.png"  // 修正为正确的public路径
        alt="Grid布局示例"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>作业展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['页面展示三'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    {/* 卡片3 - Grid */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示4.png"  // 修正为正确的public路径
        alt="Grid布局示例"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>作业展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['页面展示四'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    {/* 卡片5 - Grid */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示5.png"  // 修正为正确的public路径
        alt="Grid布局示例"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>作业展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['页面展示五'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    {/* 卡片5 - Grid */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
    }}>
      <img 
        src="/images/页面展示6.png"  // 修正为正确的public路径
        alt="Grid布局示例"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee'
        }}
      />
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          margin: '0 0 15px 0',
          fontSize: '1.2rem',
          color: '#34495e'
        }}>作业展示</h3>
        <ul style={{ 
          margin: 0,
          paddingLeft: '20px',
          lineHeight: '1.8',
          color: '#555'
        }}>
          {['页面展示六'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

          {/* 所学感悟部分 */}
          <section id="experience" style={{
  padding: '25px',
}}></section>
          <section style={{ 
            marginBottom: '30px',
            padding: '25px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            borderLeft: '4px solid #0070f3'
          }}>
            <h2 style={{ 
              color: '#333', 
              marginTop: 0,
              fontSize: '1.8rem',
              fontWeight: 600,
              marginBottom: '15px'
            }}>所学感悟</h2>
            <ul style={{ 
              paddingLeft: '25px',
              listStyleType: 'circle',
              color: '#444',
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}>
              <li>Web是连接世界的桥梁</li>
              <li>学无止境，技术常新</li>
              <li>用户体验即灵魂</li>
            </ul>
          </section>
        </main>

        {/* 页脚 */}
        <footer style={{
          backgroundColor: '#FFB6C1',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          marginTop: '40px',
          borderRadius: '8px',
          fontSize: '1rem'
        }}>
          <p style={{ margin: 0 }}>23级新闻学一班 · 张俏晗 · Web期末作品</p>
          <p style={{ 
            margin: '10px 0 0',
            fontSize: '0.9rem',
            color: 'white'
          }}>
            wakatime本周编码时长: 
            <span id="wakatime-stats" style={{ marginLeft: '5px' }}>
              加载中...
            </span>
          </p>
          <p style={{ 
            margin: '10px 0 0',
            fontSize: '0.9rem',
            color: 'white'
          }}>© {new Date().getFullYear()} </p>
        </footer>
      </div>
    </>
  )
}