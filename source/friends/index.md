---
title: 友情链接
date: 2025-10-16 10:45:22
---
  如果想要添加友链，在下方留言给我（需要登陆 GitHub ），并已将我的主页加入友链，我看到后会尽快添加你的友链。
  只需要提供头像和链接还有简介给我。
  目前本页面暗色模式留言板有些bug，待开发维修 或者我找一个适配的


<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SatouのBlog - 友情链接</title>
<style>
  /* ======== links 容器 ======== */
  #links {
    margin: 0 auto;
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.8rem;
  }
  /* ======== link-item 永远透明 ======== */
  .link-item {
    flex: 0 1 calc(50% - 0.8rem);
    display: flex;
    align-items: flex-start;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    background: transparent; /* 永远透明 */
    box-shadow: none;        /* 去掉阴影，更纯净透明 */
    transition: transform 0.25s ease;
  }
  .link-item:hover {
    transform: translateY(-3px);
  }
  /* ======== 头像样式 ======== */
  .ava {
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: transform 0.8s ease-in-out, box-shadow 0.8s ease-in-out;
  }
  .ava:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(0, 153, 255, 0.5);
  }
  /* ======== 内容区域 ======== */
  .link-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .link-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .link-info a {
    font-weight: 600;
    font-size: 1rem;
    color: #222; /* 文字颜色，可改 */
    text-decoration: none;
    transition: color 0.25s ease;
  }
  .link-info a:hover {
    color: #1e90ff;
  }
  /* ======== info 改为灰色 ======== */
  .info {
    font-size: 0.85rem;
    color: #888; /* 灰色 */
    margin-top: 0.2rem;
    text-align: left;
  }
  .tags {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
  .tag {
    border-radius: 999px;
    padding: 0.2rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #fff;
  }
  .tag-it { background-color: #1abc9c; }
  .tag-tech { background-color: #3498db; }
  @media (max-width: 700px) {
    .link-item { flex: 1 1 100%; flex-direction: row; }
    .ava { margin-bottom: 0; }
  }

</style>
</head>

<body>

  <div id="links">
    <div class="link-item">
      <img class="ava" src="https://github.com/SokiSama/picked/blob/main/avatar.jpg?raw=true" />
      <div class="link-content">
        <div class="link-info">
          <a href="https://matsusatou.top" target="_blank">SatouのBlog</a>
          <!-- 新 info 示例：
               <span class="info">这里是额外信息</span>
          -->
        </div>
        <div class="info">彼女の愛は、甘くて痛い</div>
      </div>
    </div>
    <div class="link-item">
      <img class="ava" src="https://cynosura.one/img/profile-avatar.webp" />
      <div class="link-content">
        <div class="link-info">
          <a href="https://cynosura.one/" target="_blank">熊熊</a>
        </div>
        <div class="info">好耶，是熊熊</div>
      </div>
    </div>
    <div class="link-item">
      <img class="ava" src="https://gravatar.loli.net/avatar/1741ba4d7382ef4f8a556fdf3d88a4cf?s=300" />
      <div class="link-content">
        <div class="link-info">
          <a href="https://blog.nanoka.moe/links" target="_blank">三月七</a>
        </div>
        <div class="info">喵！这里是三月七</div>
      </div>
    </div>
  </div>

</body>
</html>