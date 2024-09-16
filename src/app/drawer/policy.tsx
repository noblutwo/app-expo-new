import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface PolicyItemProps {
    title: string,
    content: string[]
}

const PrivacyPolicy = () => {
  const policyData: PolicyItemProps[] = [
    { 
      title: 'Ứng dụng VNeID',
      content: [
        'Ứng dụng (VNeID) là ứng dụng do Trung tâm dữ liệu quốc gia về dân cư - Bộ Công an Việt Nam phát triển dựa trên nền tảng ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử phục vụ chuyển đổi số quốc gia giai đoạn 2022-2025, tầm nhìn đến năm 2030 theo đề án 06 đã được thủ tướng Chính phủ phê duyệt;',
        'Ứng dụng VNeID giúp công dân khai báo di chuyển y tế và khai báo di chuyển nội địa nhanh chóng, Giúp Cơ quan chức năng truy vết các ca lây nhiễm COVID-19 thứ phát và thông báo cho người dân được kịp thời.',
        'Ứng dụng VNeID áp dụng cho Công dân Việt Nam.'
      ]
    },
    {
      title: '1. Thu thập thông tin cá nhân',
      content: [
        '1.1. Các loại thông tin thu thập',
        '- Các thông tin liên quan đến tài khoản định danh điện tử của bạn.',
        '- Thông tin liên lạc của bạn, thông tin từ (các) nguồn dữ liệu do bạn cung cấp;',
        '- Thông tin từ thiết bị của bạn bao gồm địa chỉ IP, địa chỉ MAC, tên và cấu hình thiết bị (kiểu máy, loại, hệ điều hành và các thuộc tính kỹ thuật khác) cũng như các dạng dữ liệu khác lưu trữ trên thiết bị của bạn liên quan đến việc sử dụng VNeID;',
        '- Vân tay, nhận dạng khuôn mặt của bạn, tính năng nhận dạng vân tay hoặc tính năng nhận dạng khuôn mặt có liên quan trên thiết bị di động đã đăng ký của bạn,',
        '- Những thông tin khác có thể được cung cấp bởi, hoặc được thu thập từ bạn liên quan đến việc bạn sử dụng VNeID.',
        '- Các loại thông tin khác liên quan đến hoạt động của bạn trên VNeID: Cookie, Nhật ký máy chủ',
        '1.2. Mục đích thu thập dữ liệu',
        'Dữ liệu được yêu cầu và thu thập từ bạn có thể được chúng tôi sử dụng cho bất kỳ mục đích nào sau đây:',
        '- Để hỗ trợ, xử lý và tạo điều kiện thuận lợi cho việc sử dụng VNeID, bao gồm đăng ký và tạo tài khoản của bạn, tạo điều kiện thuận lợi cho việc đăng nhập vào tài khoản của bạn và việc bạn sử dụng bất kỳ tính năng hoặc chức năng nào của VNeID;',
        '- Để thực hiện các phản hồi hoặc khiếu nại nào do bạn hoặc ủy quyền bởi bạn, hoặc vì mục đích phản hồi hoặc xử lý các tương tác của bạn với chúng tôi;',
        '- Để giám sát và theo dõi việc sử dụng VNeID, nhằm hỗ trợ chúng tôi hiểu được hành vi, xu hướng và sở thích của người dùng cũng như trong việc cải thiện VNeID.',
        '- Cho mục đích lưu trữ hoặc tạo bản sao lưu Dữ liệu của bạn cho mục đích dự phòng hoặc mục đích hoạt động liên tục;',
        '- Để ngăn chặn hoặc điều tra bất kỳ gian lận, hoạt động bất hợp pháp hoặc thiếu sót hoặc hành vi sai trái thông qua việc sử dụng tài khoản của bạn, cho dù có bất kỳ nghi ngờ nào về những điều đã nói ở trên hay không',
        '- Để giải quyết xung đột lợi ích hoặc điều tra các khiếu nại liên quan đến tài khoản của bạn;',
        '- Để điền Dữ liệu hồ sơ của bạn khi bạn đồng ý chia sẻ và sử dụng các dịch vụ được cung cấp trên VNeID hoặc các ứng dụng tích hợp từ các bên cung cấp dịch vụ thông qua ứng dụng VNeID;',
        '- Điền trước bất kỳ biểu mẫu điện tử, trang đăng ký người dùng hoặc màn hình nào trên bất kỳ (các) kênh của người dùng được chấp thuận với Dữ liệu hồ sơ của bạn',
        '- Để cho phép chúng tôi liên hệ với bạn hoặc trao đổi với bạn về bất kỳ vấn đề nào liên quan đến việc bạn sử dụng VNeID qua email, thông báo tin nhắn trên ứng dụng hoặc các hình thức liên lạc khác;',
        '- Cho bất kỳ (các) mục đích nào khác không xuất hiện ở trên nếu được cho phép theo bất kỳ văn bản pháp luật nào.'
      ]
    },
    {
      title: '2. Bảo vệ sự riêng tư và bản quyền',
      content: [
        'Dữ liệu của người dùng sẽ được lưu trữ và bảo mật bởi Trung tâm Dữ liệu quốc gia về dân cư, Bộ Công an và chỉ sử dụng vào mục đích phát triển định danh và xác thực điện tử phục vụ chuyển đổi số quốc gia và hỗ trợ công tác phòng chống dịch COVID-19; giúp bảo vệ sức khoẻ và chống dịch bệnh, tuyệt đối không sử dụng vào mục đích thương mại, không xâm phạm đời tư.',
        'Ngoài các mục đích trên, đơn vị phát triển ứng dụng không được phép thu thập, sử dụng thông tin của người dùng vào bất kỳ mục đích gì khác. Và sẽ không tiết lộ bất kỳ thông tin nào có thể gây tổn hại hoặc thực hiện bất kỳ hành vi bất hợp pháp nào về quyền riêng tư của người dùng theo luật pháp Việt Nam hoặc chính sách của ứng dụng. Ngoài ra dữ liệu của người dùng có thể được cung cấp cho các Cơ quan nhà nước, cơ quan Y tế có thẩm quyển của Việt Nam phục vụ công tác chuyển đổi số quốc gia và phòng, chống dịch COVID-19',
        '- Chúng tôi không ngừng nỗ lực cải thiện các biện pháp bảo vệ này nhằm góp phần đảm bảo an toàn cho dữ liệu cá nhân của bạn.',
        '- Bạn có thể rút lại sự đồng ý của mình đối với việc chúng tôi sử dụng và xử lý Dữ liệu của bạn; tuy nhiên, làm như vậy có thể ngăn cản việc sử dụng các chức năng của ứng dụng VNeID.'
      ]
    },
    {
      title: '3. Quyền truy cập',
      content: [
        'Khi sử dụng Ứng dụng, Người dùng đồng ý cho phép ứng dụng có quyền truy cập các chức năng sau:',
        '(1) Truy cập vào Internet từ thiết bị người dùng',
        '(2) Truy cập camera để quét mã QRcode trên thẻ CCCD giúp rút ngắn thời gian nhập các thông tin cơ bản của Công dân và quét QRcode tại điểm quét để khai báo di chuyển, y tế nhanh chóng.',
        '(3) Truy cập vào Ảnh, tệp, bộ nhớ và nội dung nghe, nhìn trên thiết bị để lưu trữ ảnh QRcode phục vụ việc kiểm tra khi đi qua các chốt kiểm soát của công dân.',
        '(4) Gửi thông báo tới thiết bị của người dùng'
      ]
    },
    {
      title: '4. Thay đổi và cập nhật',
      content: [
        'Chúng tôi có quyền thay đổi, chỉnh sửa hoặc bổ sung Chính sách về quyền riêng tư theo quyết định của mình và vào bất kỳ lúc nào, bằng cách đăng Chính sách về quyền riêng tư đã được thay đổi, sửa đổi hoặc bổ sung trên hoặc thông qua Trang web VNeID, ứng dụng VNeID hoặc thông qua các phương tiện khác. Việc bạn tiếp tục sử dụng VNeID sau khi đăng bất kỳ thay đổi, sửa đổi hoặc bổ sung nào về Chính sách quyền riêng tư sẽ cấu thành việc bạn chấp nhận sự thay đổi, sửa đổi hoặc bổ sung đó. Nếu bạn không đồng ý với bất kỳ thay đổi, chỉnh sửa hoặc bổ sung nào đối với Chính sách về quyền riêng tư, vui lòng không sử dụng ứng dụng VNeID.'
      ]
    },
    {
      title: '5. Quyền, trách nhiệm của người dùng',
      content: [
        'Tuân thủ các quy định về bảo đảm an toàn thông tin, an ninh thông tin. Người dùng đảm bảo nhập liệu các thông tin chính xác, có độ xác thực cao.',
        'Được bảo vệ bí mật thông tin riêng và thông tin theo quy định của pháp luật. Trong quá trình sử dụng ứng dụng, Người dùng được sử dụng các dịch vụ hỗ trợ theo quy định. Khi phát hiện ra lỗi của sản phẩm, Người dùng được thông báo và nhận được sự hỗ trợ bởi đội ngũ phát triển.',
        'Thực hiện quyền và trách nhiệm khác theo quy định pháp luật.'
      ]
    }
  ];


const renderItem = ({ item }: { item: PolicyItemProps }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{item.title}</Text>
      {item.content.map((text, index) => (
        <Text key={index} style={styles.paragraph}>{text}</Text>
      ))}
    </View>
  );

  return (
    <FlatList
      data={policyData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
  },
});

export default PrivacyPolicy;