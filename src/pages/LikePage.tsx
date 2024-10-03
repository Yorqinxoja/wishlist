import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductCard from '../components/ProductCard';
import { Row, Col, Empty } from 'antd';

const LikePage: React.FC = () => {
  const likedProducts = useSelector((state: RootState) => state.like.likedProducts);
  const products = useSelector((state: RootState) => state.products.products);

  const likedItems = products.filter(product => likedProducts.includes(product.id));

  return (
    <Row gutter={[16, 16]}>
      {likedItems.length === 0 ? ( 
        <Col span={24}>
          <Empty description="No liked products yet!" />
        </Col>
      ) : (
        likedItems.map((product) => (
          <Col key={product.id} span={6}>
            <ProductCard product={product} />
          </Col>
        ))
      )}
    </Row>
  );
};

export default LikePage;
