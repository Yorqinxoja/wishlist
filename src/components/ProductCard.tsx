import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../features/like/likeSlice';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { RootState } from '../store/store';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: RootState) => state.like.likedProducts);
  const isLiked = likedProducts.includes(product.id);

  const handleLike = () => {
    dispatch(toggleLike(product.id));

    // Отображение уведомления
    if (!isLiked) {
      toast.success('Product liked!');
    } else {
      toast.info('Product unliked!');
    }
  };

  return (
    <Card
      hoverable
      cover={<img alt={product.title} src={product.thumbnail} />}
      style={{ width: 300 }}
    >
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Button
        type="text"
        icon={isLiked ? <HeartFilled style={{ color: 'red', fontSize: '26px' }} /> : <HeartOutlined />}
        onClick={handleLike}
      >
        {isLiked ? 'Liked' : 'Like'}
      </Button>
    </Card>
  );
};

export default ProductCard;
