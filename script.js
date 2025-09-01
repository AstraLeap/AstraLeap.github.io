// 页面加载完成后执行
window.addEventListener('load', function () {
    // 获取标题元素
    const title = document.querySelector('h1');

    // 添加淡入动画效果
    title.style.opacity = '0';
    title.style.transition = 'opacity 1s ease-in-out';

    // 延迟执行淡入效果
    setTimeout(() => {
        title.style.opacity = '1';
    }, 1000);

    // 获取视频播放器元素
    const videoPlayer = document.querySelector('.ycy');

    // 为视频播放器添加鼠标悬停效果
    videoPlayer.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    videoPlayer.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });

    // 添加页面滚动时的导航栏效果
    window.addEventListener('scroll', function () {
        // 在这里可以添加滚动相关的交互效果
    });
});