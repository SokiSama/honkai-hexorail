const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class SiteStats extends Component {
  render() {
    const { title, stats } = this.props;
    const items = [
      { icon: 'article', label: '文章', value: stats.posts },
      { icon: 'sell', label: '标签', value: stats.tags },
      { icon: 'category', label: '分类', value: stats.categories },
      { icon: 'text_fields', label: '总字数', value: stats.words }
    ];

    return (
      <div class="card widget" id="site-stats">
        <div class="card-content">
          <div class="menu">
            <h3 class="menu-label">{title}</h3>
            <div class="columns is-multiline is-mobile">
              {items.map((it) => (
                <div class="column is-half">
                  <div class="is-flex is-align-items-center">
                    <span class="material-symbols-outlined" style="font-size:1.25rem;margin-right:0.5rem;">{it.icon}</span>
                    <span class="has-text-grey" style="margin-right:0.25rem;">{it.label}</span>
                    <span class="tag">{it.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SiteStats.Cacheable = cacheComponent(SiteStats, 'widget.sitestats', (props) => {
  const { site, helper } = props;
  const postsCount = site.posts.length;
  const tagsCount = site.tags.filter(tag => tag.length).length;
  const categoriesCount = site.categories.filter(cat => cat.length).length;

  // 粗略统计总字数：移除HTML标签与空白字符后统计字符数
  let totalWords = 0;
  site.posts.forEach(post => {
    const content = (post.content || '').replace(/<[^>]*>/g, '').replace(/\s+/g, '');
    totalWords += content.length;
  });

  return {
    title: helper.__('widget.site_stats') || '站点统计',
    stats: {
      posts: postsCount,
      tags: tagsCount,
      categories: categoriesCount,
      words: totalWords
    }
  };
});

module.exports = SiteStats;