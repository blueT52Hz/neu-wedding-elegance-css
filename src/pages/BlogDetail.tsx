
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id || '1');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "5 Xu Hướng Váy Cưới Nổi Bật Nhất Năm 2024",
      excerpt: "Khám phá những xu hướng váy cưới đang làm mưa làm gió trong năm 2024, từ phong cách tối giản đến vintage cổ điển.",
      image: "https://picsum.photos/id/1011/800/500",
      date: "10/04/2024",
      author: "Nguyễn Minh Tâm",
      category: "Xu Hướng Váy Cưới",
      content: `
        <p>Năm 2024 mang đến làn gió mới cho thế giới váy cưới với những xu hướng vừa kế thừa nét đẹp truyền thống, vừa đột phá với những ý tưởng sáng tạo hiện đại. Sau đây là 5 xu hướng váy cưới đang được các cô dâu yêu thích nhất trong năm nay:</p>

        <h3>1. Váy Cưới Minimalist - Vẻ Đẹp Của Sự Tinh Giản</h3>
        <p>Phong cách minimalist tiếp tục thống trị với những thiết kế váy cưới đơn giản nhưng vô cùng tinh tế. Các nhà thiết kế tập trung vào đường cắt hoàn hảo, chất liệu cao cấp như lụa satin mịn màng, crepe sang trọng thay vì những chi tiết đính kết cầu kỳ. Điểm nhấn của xu hướng này là sự tôn vinh vẻ đẹp tự nhiên của cô dâu, tạo nên vẻ thanh lịch, hiện đại mà vẫn đầy quyến rũ.</p>
        <p>Các kiểu dáng phổ biến trong xu hướng này bao gồm váy suông chữ A, váy slip dress thanh mảnh, hay váy column dress thẳng đứng. Màu trắng tinh khôi hoặc màu kem nhẹ nhàng là lựa chọn hàng đầu cho phong cách tối giản này.</p>

        <h3>2. Váy Cưới Vintage - Hoài Niệm Và Lãng Mạn</h3>
        <p>Năm 2024 chứng kiến sự trở lại mạnh mẽ của các thiết kế váy cưới lấy cảm hứng từ những thập niên trước, đặc biệt là phong cách thập niên 70 và 90. Các chi tiết như tay áo phồng, cổ cao, ren vintage, và những đường cắt cổ điển đang được yêu thích trở lại.</p>
        <p>Đặc biệt, váy cưới theo phong cách bohemian lãng mạn với chất liệu ren, voan mỏng nhẹ và những chi tiết thêu thủ công tỉ mỉ tạo nên vẻ đẹp mơ mộng, phóng khoáng cho những cô dâu yêu thích sự tự do, phóng khoáng.</p>

        <h3>3. Váy Cưới Hai Trong Một - Sự Linh Hoạt Tối Đa</h3>
        <p>Xu hướng váy cưới có thể biến đổi linh hoạt đang ngày càng được ưa chuộng. Các nhà thiết kế đã tạo ra những chiếc váy có thể thay đổi kiểu dáng từ lễ cưới chính thức sang tiệc tối, giúp cô dâu không cần thay đổi hoàn toàn trang phục.</p>
        <p>Điều này được thực hiện thông qua các chi tiết có thể tháo rời như tay áo, tà váy phụ, hoặc layer váy ngoài. Ví dụ như một chiếc váy ball gown lộng lẫy có thể biến thành váy suông ôm gọn gàng khi tháo lớp váy xòe bên ngoài, hoặc váy dài có thể biến thành váy ngắn trẻ trung cho tiệc tối.</p>

        <h3>4. Váy Với Họa Tiết 3D - Nghệ Thuật Điêu Khắc</h3>
        <p>Một trong những xu hướng nổi bật nhất năm 2024 là các chi tiết hoa 3D, cánh bướm, hoặc các họa tiết nổi được đính kết tỉ mỉ trên váy cưới. Những chi tiết này tạo nên hiệu ứng chuyển động, chiều sâu và sự sống động cho trang phục.</p>
        <p>Các nhà thiết kế sử dụng kỹ thuật cắt laser, thêu đính thủ công để tạo nên những "tác phẩm điêu khắc" tinh xảo trên nền vải, mang đến vẻ đẹp độc đáo và ấn tượng cho chiếc váy cưới.</p>

        <h3>5. Váy Cưới Màu Pastel - Phá Cách Nhẹ Nhàng</h3>
        <p>Không chỉ có màu trắng truyền thống, các tông màu pastel nhẹ nhàng như hồng phấn, xanh baby, tím lavender, và be champagne đang là lựa chọn mới mẻ cho các cô dâu muốn phá cách một chút mà vẫn giữ được nét thanh lịch, tinh tế.</p>
        <p>Màu pastel không chỉ xuất hiện trên toàn bộ váy mà còn được ứng dụng khéo léo trong các chi tiết đính kết, dải ruy băng, hoặc lớp voan phủ bên ngoài tạo hiệu ứng ombre màu tinh tế.</p>

        <p>Dù bạn là cô dâu yêu thích sự tối giản tinh tế, hoài cổ lãng mạn, hay hiện đại phá cách, xu hướng váy cưới năm 2024 đều có thể đáp ứng gu thẩm mỹ và phù hợp với cá tính riêng của mỗi người. Hãy tham khảo và lựa chọn phong cách phù hợp nhất với bản thân để tỏa sáng trong ngày trọng đại của mình.</p>
      `
    },
    {
      id: 2,
      title: "Cách Chọn Váy Cưới Phù Hợp Với Dáng Người",
      excerpt: "Mỗi cô dâu có một vóc dáng khác nhau, hãy tìm hiểu cách chọn váy cưới phù hợp để tôn lên vẻ đẹp riêng của bạn.",
      image: "https://picsum.photos/id/1012/800/500",
      date: "05/04/2024",
      author: "Lê Thị Hồng",
      category: "Bí Quyết Chọn Váy",
      content: `
        <p>Việc lựa chọn váy cưới không chỉ đơn thuần là theo đuổi xu hướng hay sở thích cá nhân, mà còn liên quan mật thiết đến việc tôn lên những ưu điểm và che đi những khuyết điểm về vóc dáng. Mỗi cô dâu đều sở hữu một dáng người riêng biệt, và cũng xứng đáng có được một chiếc váy cưới hoàn hảo nhất cho ngày trọng đại của mình.</p>

        <h3>1. Dáng Người Đồng Hồ Cát (Hourglass)</h3>
        <p>Đặc điểm: Vai cân đối với hông, eo thon rõ rệt.</p>
        <p>Gợi ý:</p>
        <ul>
          <li>Váy ôm sát (Mermaid/Trumpet): Tôn lên đường cong tự nhiên.</li>
          <li>Váy chữ A cổ chữ V: Tạo điểm nhấn ở vòng eo.</li>
          <li>Váy corset: Định hình rõ rệt vòng eo.</li>
        </ul>
        <p>Thiết kế nên tránh: Váy suông, váy empire quá rộng sẽ không tôn được ưu điểm đường cong.</p>

        <h3>2. Dáng Người Quả Lê (Pear Shape)</h3>
        <p>Đặc điểm: Vai nhỏ hơn hông, hông và đùi rộng hơn phần trên cơ thể.</p>
        <p>Gợi ý:</p>
        <ul>
          <li>Váy xòe ball gown: Tạo cân bằng bằng cách làm phần trên nổi bật và che phần dưới.</li>
          <li>Váy cổ thuyền hoặc cổ ngang: Tạo ảo giác vai rộng hơn.</li>
          <li>Váy chữ A: Cân đối tỷ lệ cơ thể, thon gọn từ eo xuống.</li>
        </ul>
        <p>Thiết kế nên tránh: Váy ôm sát đùi và hông, váy quá đơn giản ở phần trên.</p>

        <h3>3. Dáng Người Tam Giác Ngược (Inverted Triangle)</h3>
        <p>Đặc điểm: Vai rộng, ngực lớn, hông nhỏ hơn so với phần trên.</p>
        <p>Gợi ý:</p>
        <ul>
          <li>Váy chữ A với điểm nhấn ở eo và hông: Tạo cân bằng.</li>
          <li>Váy cổ V sâu: Kéo dài phần trên, làm giảm độ rộng của vai.</li>
          <li>Váy có chi tiết ở hông: Tạo ảo giác hông rộng hơn.</li>
        </ul>
        <p>Thiết kế nên tránh: Váy cổ thuyền, cổ ngang, vai phồng làm vai trông rộng hơn.</p>

        <h3>4. Dáng Người Chữ Nhật (Rectangle)</h3>
        <p>Đặc điểm: Vai, eo, hông có tỷ lệ gần như nhau, ít đường cong.</p>
        <p>Gợi ý:</p>
        <ul>
          <li>Váy peplum: Tạo ảo giác eo thon.</li>
          <li>Váy dáng váy xòe hoặc ball gown: Tạo đường cong.</li>
          <li>Váy có chi tiết đính kết, xếp ly ở vùng eo: Định hình vòng eo.</li>
          <li>Váy corset: Tạo đường cong rõ rệt.</li>
        </ul>
        <p>Thiết kế nên tránh: Váy suông không có điểm nhấn ở eo, váy quá đơn giản.</p>

        <h3>5. Dáng Người Quả Táo (Apple Shape)</h3>
        <p>Đặc điểm: Vai rộng, bụng tròn, eo không rõ, chân thon.</p>
        <p>Gợi ý:</p>
        <ul>
          <li>Váy empire: Đai ngay dưới ngực tạo ảo giác eo cao hơn.</li>
          <li>Váy xòe chữ A: Che khéo vòng 2, tôn chân thon.</li>
          <li>Váy cổ V sâu: Tạo điểm nhấn ở ngực, kéo dài thân trên.</li>
        </ul>
        <p>Thiết kế nên tránh: Váy ôm quá sát, váy có đai ở eo, váy mermaid quá bó.</p>

        <h3>6. Dáng Người Petite (Nhỏ Nhắn)</h3>
        <p>Đặc điểm: Chiều cao dưới 1m60, tỷ lệ tổng thể nhỏ.</p>
        <p>Gợi ý:</p>
        <ul>
          <li>Váy suông dáng dài: Tạo ảo giác cao hơn.</li>
          <li>Váy chữ A vừa phải: Không quá xòe để không làm cơ thể "mất hút".</li>
          <li>Váy có đường may dọc: Tạo cảm giác kéo dài cơ thể.</li>
        </ul>
        <p>Thiết kế nên tránh: Váy ball gown quá xòe, váy có quá nhiều lớp, chi tiết cầu kỳ làm rối mắt.</p>

        <h3>7. Dáng Người Cao (Tall)</h3>
        <p>Đặc điểm: Chiều cao trên 1m70.</p>
        <p>Gợi ý:</p>
        <ul>
          <li>Váy ball gown: Cân bằng với chiều cao.</li>
          <li>Váy mermaid/trumpet: Tôn đường cong và chiều cao.</li>
          <li>Váy có chi tiết ngang: Cắt bớt chiều cao nếu muốn không trông quá cao.</li>
        </ul>
        <p>Thiết kế nên tránh: Không có kiểu váy nào thực sự "cấm kỵ", nhưng nên cân nhắc tránh váy quá đơn giản nếu không muốn trông quá cao.</p>

        <p>Lưu ý rằng, những gợi ý trên chỉ mang tính chất tham khảo. Điều quan trọng nhất vẫn là cảm giác thoải mái và tự tin của cô dâu khi khoác lên mình chiếc váy cưới. Đôi khi, phá vỡ quy tắc lại mang đến những kết quả bất ngờ và tuyệt vời. Hãy thử nhiều kiểu dáng khác nhau và lắng nghe cảm nhận của bản thân để tìm ra chiếc váy hoàn hảo nhất.</p>
      `
    },
    {
      id: 3,
      title: "10 Màu Sắc Váy Cưới Đẹp Ngoài Màu Trắng Truyền Thống",
      excerpt: "Không chỉ có màu trắng, khám phá 10 tông màu váy cưới tuyệt đẹp mà các cô dâu hiện đại đang yêu thích.",
      image: "https://picsum.photos/id/1013/800/500",
      date: "01/04/2024",
      author: "Trần Hoàng Nam",
      category: "Xu Hướng Váy Cưới",
      content: `
        <p>Từ lâu, màu trắng đã trở thành biểu tượng truyền thống của váy cưới, tượng trưng cho sự tinh khiết và trong trắng. Tuy nhiên, với xu hướng ngày càng hiện đại và cá nhân hóa, nhiều cô dâu đã mạnh dạn lựa chọn những gam màu khác cho ngày trọng đại của mình. Dưới đây là 10 tông màu váy cưới tuyệt đẹp ngoài màu trắng truyền thống mà bạn có thể cân nhắc:</p>

        <h3>1. Champagne/Ivory (Màu Kem Sữa)</h3>
        <p>Màu champagne là sự lựa chọn nhẹ nhàng, tinh tế cho những cô dâu muốn tìm kiếm một gam màu trung tính nhưng không quá trắng. Tông màu này đặc biệt phù hợp với làn da châu Á, tạo cảm giác ấm áp và sang trọng. Đây là một trong những lựa chọn phổ biến nhất thay thế cho màu trắng thuần.</p>

        <h3>2. Blush Pink (Hồng Phấn)</h3>
        <p>Màu hồng phấn nhẹ nhàng mang đến vẻ lãng mạn, nữ tính và ngọt ngào. Tông màu này vừa đủ để tạo điểm nhấn mà không quá nổi bật, phù hợp với cả tiệc cưới trong nhà và ngoài trời. Váy cưới màu hồng phấn thường được làm từ chất liệu voan, tulle để tạo hiệu ứng mờ ảo, mộng mơ.</p>

        <h3>3. Powder Blue (Xanh Pastel)</h3>
        <p>Màu xanh pastel nhẹ nhàng gợi liên tưởng đến bầu trời trong xanh, mang ý nghĩa của sự thanh bình và hy vọng. Đây là lựa chọn tuyệt vời cho các cô dâu yêu thích sự mới mẻ và muốn có "something blue" (điều gì đó màu xanh - theo truyền thống phương Tây) trong ngày cưới của mình.</p>

        <h3>4. Gold (Vàng Gold)</h3>
        <p>Váy cưới màu vàng gold tỏa sáng lộng lẫy, biểu tượng của sự giàu có và thịnh vượng. Tùy vào sắc độ đậm nhạt, gold có thể mang đến vẻ đẹp hoàng gia sang trọng hoặc ấm áp tinh tế. Màu này đặc biệt nổi bật trong những bức ảnh cưới và phù hợp với những buổi tiệc cưới tổ chức vào buổi tối.</p>

        <h3>5. Lavender (Tím Lavender)</h3>
        <p>Màu tím lavender tượng trưng cho sự tinh tế, lãng mạn và một chút huyền bí. Tông màu này mang đến vẻ đẹp độc đáo và phá cách cho cô dâu. Váy cưới màu lavender có thể kết hợp tuyệt vời với các họa tiết thêu hoa hoặc đính hạt tạo điểm nhấn.</p>

        <h3>6. Mint Green (Xanh Bạc Hà)</h3>
        <p>Màu xanh bạc hà tươi mát tượng trưng cho sự tươi mới và khởi đầu mới. Đây là lựa chọn tuyệt vời cho những đám cưới mùa xuân hoặc mùa hè, đặc biệt là với không gian cưới ngoài trời. Tông màu này còn mang đến cảm giác nhẹ nhàng, trong lành và gần gũi với thiên nhiên.</p>

        <h3>7. Dusty Rose (Hồng Đất)</h3>
        <p>Hồng đất là sự kết hợp giữa hồng và nâu, mang đến vẻ đẹp cổ điển, trưởng thành và thanh lịch. Màu sắc này ít ngọt ngào hơn so với hồng phấn, phù hợp với những cô dâu yêu thích phong cách vintage, bohemian. Đây cũng là tông màu dễ phối hợp với nhiều không gian tiệc cưới khác nhau.</p>

        <h3>8. Silver/Gray (Bạc/Xám)</h3>
        <p>Váy cưới màu bạc hoặc xám nhạt mang đến vẻ đẹp hiện đại, tinh tế và không kém phần sang trọng. Tông màu này phản chiếu ánh sáng tuyệt vời và thường được làm từ chất liệu lụa, satin có độ bóng để tạo hiệu ứng óng ánh. Đây là lựa chọn táo bạo cho những cô dâu theo đuổi phong cách đương đại.</p>

        <h3>9. Champagne Gold Ombre (Ombre Vàng Champagne)</h3>
        <p>Xu hướng màu ombre (chuyển màu) từ champagne sang gold đang được nhiều cô dâu hiện đại yêu thích. Hiệu ứng chuyển màu này tạo chiều sâu và sự độc đáo cho váy cưới, đặc biệt nổi bật khi di chuyển và trong những bức ảnh. Đây là sự lựa chọn hoàn hảo cho những cô dâu muốn có điểm nhấn đặc biệt mà vẫn giữ được vẻ tinh tế.</p>

        <h3>10. Black & White Combination (Kết hợp Đen Trắng)</h3>
        <p>Sự kết hợp táo bạo giữa đen và trắng đang trở thành xu hướng cho những cô dâu yêu thích phong cách độc đáo và hiện đại. Điều này có thể thể hiện qua chi tiết đính kết màu đen trên nền váy trắng, hoặc thậm chí là những thiết kế color block đen trắng ấn tượng. Phong cách này thể hiện cá tính mạnh mẽ và óc thẩm mỹ tinh tế của cô dâu.</p>

        <p>Khi lựa chọn màu sắc cho váy cưới, ngoài yếu tố cá nhân và sở thích, bạn cũng nên cân nhắc đến:</p>
        <ul>
          <li>Tông da của bản thân: Một số màu sắc sẽ tôn lên làn da của bạn tốt hơn những màu khác.</li>
          <li>Chủ đề và không gian tiệc cưới: Màu váy nên hài hòa với tổng thể không gian và màu sắc chủ đạo của đám cưới.</li>
          <li>Mùa cưới: Một số tông màu phù hợp với các mùa nhất định trong năm, ví dụ như màu pastel cho mùa xuân/hè, màu đậm hơn cho mùa thu/đông.</li>
        </ul>

        <p>Dù bạn chọn màu sắc nào, điều quan trọng nhất là bạn cảm thấy tự tin và thoải mái khi khoác lên mình chiếc váy đó. Đừng ngại phá vỡ quy tắc truyền thống để tạo nên một đám cưới thực sự mang dấu ấn cá nhân của bạn!</p>
      `
    },
    {
      id: 4,
      title: "Phụ Kiện Cưới Nào Hoàn Hảo Cho Chiếc Váy Của Bạn?",
      excerpt: "Từ vương miện, khăn voan đến giày cưới, hãy tìm hiểu cách phối hợp phụ kiện sao cho hoàn hảo với váy cưới.",
      image: "https://picsum.photos/id/1014/800/500",
      date: "28/03/2024",
      author: "Phạm Thị Mai",
      category: "Phụ Kiện Cưới",
      content: `
        <p>Phụ kiện cưới đóng vai trò vô cùng quan trọng trong việc hoàn thiện diện mạo của cô dâu trong ngày trọng đại. Không chỉ là những món đồ trang trí, chúng còn là điểm nhấn tinh tế giúp tôn lên vẻ đẹp của chiếc váy cưới và cá tính riêng của mỗi cô dâu. Hãy cùng khám phá các loại phụ kiện cưới và cách phối hợp chúng hoàn hảo với váy cưới của bạn.</p>

        <h3>1. Khăn Voan (Veil)</h3>
        <p>Khăn voan là phụ kiện truyền thống và biểu tượng của cô dâu, tạo nên vẻ đẹp lãng mạn, tinh khôi.</p>
        <p><strong>Các loại khăn voan phổ biến:</strong></p>
        <ul>
          <li>Cathedral veil: Dài và trang trọng, phù hợp với váy đuôi dài và không gian nhà thờ, lâu đài.</li>
          <li>Chapel veil: Dài vừa phải, linh hoạt hơn.</li>
          <li>Fingertip veil: Dài đến đầu ngón tay, cân bằng và dễ di chuyển.</li>
          <li>Elbow veil: Dài đến khuỷu tay, năng động và trẻ trung.</li>
          <li>Birdcage veil: Ngắn, che một phần mặt, mang phong cách vintage.</li>
        </ul>
        <p><strong>Cách phối với váy cưới:</strong></p>
        <ul>
          <li>Váy đuôi dài, sang trọng: Khăn voan cathedral hoặc chapel.</li>
          <li>Váy chữ A đơn giản: Khăn voan fingertip hoặc elbow.</li>
          <li>Váy cưới vintage: Birdcage veil.</li>
          <li>Váy có chi tiết lưng đẹp: Khăn voan một lớp để không che đi chi tiết lưng.</li>
        </ul>

        <h3>2. Vương Miện và Phụ Kiện Tóc</h3>
        <p>Vương miện, mấn cưới hay phụ kiện tóc là điểm nhấn trên đầu, tạo nên vẻ sang trọng và hoàn thiện.</p>
        <p><strong>Các loại phổ biến:</strong></p>
        <ul>
          <li>Tiara/vương miện: Tạo vẻ hoàng gia, sang trọng.</li>
          <li>Băng đô đính hạt: Hiện đại, tinh tế.</li>
          <li>Hoa cài tóc: Lãng mạn, tự nhiên, phù hợp tiệc cưới ngoài trời.</li>
          <li>Cài tóc đính đá: Thanh lịch, sang trọng.</li>
          <li>Mấn cưới: Mang phong cách truyền thống hoặc vintage.</li>
        </ul>
        <p><strong>Cách phối với kiểu tóc và váy:</strong></p>
        <ul>
          <li>Tóc búi cao: Vương miện hoặc cài tóc đặt phía sau.</li>
          <li>Tóc xõa: Băng đô, vương miện nhỏ hoặc hoa cài một bên.</li>
          <li>Váy cưới lộng lẫy: Vương miện tinh xảo tương xứng.</li>
          <li>Váy đơn giản: Phụ kiện tóc có thể nổi bật hơn để tạo điểm nhấn.</li>
          <li>Váy phong cách bohemian: Vòng hoa hoặc phụ kiện mảnh, tự nhiên.</li>
        </ul>

        <h3>3. Giày Cưới</h3>
        <p>Giày cưới không chỉ cần đẹp mà còn phải thoải mái để cô dâu có thể tự tin suốt ngày dài trọng đại.</p>
        <p><strong>Các kiểu giày cô dâu:</strong></p>
        <ul>
          <li>Giày cao gót truyền thống: Sang trọng, tôn dáng.</li>
          <li>Giày đế xuồng: Thoải mái hơn nhưng vẫn tôn chiều cao.</li>
          <li>Giày bệt đính đá: Cho những cô dâu ưu tiên sự thoải mái.</li>
          <li>Giày bootie ren: Phá cách, hiện đại.</li>
          <li>Sandals: Phù hợp tiệc cưới bãi biển, ngoài trời.</li>
        </ul>
        <p><strong>Cách chọn giày phù hợp với váy:</strong></p>
        <ul>
          <li>Váy ngắn: Giày là điểm nhấn, nên chọn kiểu dáng và màu sắc nổi bật.</li>
          <li>Váy dài chạm đất: Tập trung vào sự thoải mái, có thể chọn giày bệt nếu muốn.</li>
          <li>Váy vintage: Giày mũi nhọn cổ điển hoặc kiểu Mary Jane.</li>
          <li>Tiệc cưới bãi biển: Sandals tinh tế hoặc đi chân trần với phụ kiện chân.</li>
        </ul>

        <h3>4. Trang Sức Cưới</h3>
        <p>Trang sức là điểm nhấn lấp lánh, tạo nên vẻ hoàn thiện cho diện mạo cô dâu.</p>
        <p><strong>Các loại trang sức cưới:</strong></p>
        <ul>
          <li>Bộ trang sức (hoa tai, vòng cổ, vòng tay): Đồng bộ, sang trọng.</li>
          <li>Hoa tai dài: Tôn lên gương mặt và cổ.</li>
          <li>Vòng cổ choker: Hiện đại, tôn cổ và xương quai xanh.</li>
          <li>Vòng tay/lắc tay: Tinh tế, phù hợp với váy tay ngắn hoặc không tay.</li>
          <li>Nhẫn cưới: Biểu tượng quan trọng nhất.</li>
        </ul>
        <p><strong>Nguyên tắc phối trang sức:</strong></p>
        <ul>
          <li>"Less is more" - đừng đeo quá nhiều trang sức cùng lúc.</li>
          <li>Váy cổ cao: Tránh vòng cổ, tập trung vào hoa tai và phụ kiện tóc.</li>
          <li>Váy cổ V sâu: Vòng cổ dài hoặc mặt dây chuyền tinh tế.</li>
          <li>Váy đính kết cầu kỳ: Trang sức đơn giản để không "rối mắt".</li>
          <li>Váy đơn giản: Có thể chọn trang sức nổi bật làm điểm nhấn.</li>
        </ul>

        <h3>5. Găng Tay Cô Dâu</h3>
        <p>Găng tay mang đến vẻ đẹp cổ điển, quý phái cho cô dâu.</p>
        <p><strong>Các kiểu găng tay:</strong></p>
        <ul>
          <li>Găng tay dài (opera length): Phù hợp với váy không tay, tạo vẻ quý phái.</li>
          <li>Găng tay ngắn (wrist length): Tinh tế, phù hợp nhiều kiểu váy.</li>
          <li>Găng tay ren: Lãng mạn, nữ tính.</li>
          <li>Găng tay sa-tanh: Sang trọng, cổ điển.</li>
        </ul>
        <p><strong>Lưu ý khi đeo găng tay:</strong></p>
        <ul>
          <li>Trong lễ cưới, cần tháo găng tay phải khi trao nhẫn.</li>
          <li>Váy có tay: Nên tránh găng tay hoặc chọn găng tay rất ngắn.</li>
          <li>Tiệc cưới mùa hè: Găng tay mỏng, ren thoáng khí.</li>
          <li>Tiệc cưới mùa đông: Găng tay dày hơn, chất liệu sa-tanh.</li>
        </ul>

        <h3>6. Túi Cầm Tay Cô Dâu</h3>
        <p>Túi cầm tay nhỏ xinh không chỉ là phụ kiện thời trang mà còn thực sự hữu ích.</p>
        <p><strong>Loại túi phổ biến:</strong></p>
        <ul>
          <li>Clutch đính đá: Sang trọng, nhỏ gọn.</li>
          <li>Túi dây đeo: Thuận tiện khi cần rảnh tay.</li>
          <li>Túi cổ điển: Phù hợp váy vintage.</li>
        </ul>
        <p><strong>Vật dụng cần thiết trong túi cô dâu:</strong></p>
        <ul>
          <li>Son môi để trang điểm lại.</li>
          <li>Khăn giấy.</li>
          <li>Phấn phủ hoặc giấy thấm dầu.</li>
          <li>Kẹp tóc dự phòng.</li>
          <li>Một ít tiền mặt (nếu cần).</li>
        </ul>

        <p>Ngoài các phụ kiện trên, còn có thể cân nhắc các phụ kiện đặc biệt như:</p>
        <ul>
          <li>Áo khoác cưới (cho tiệc cưới mùa lạnh).</li>
          <li>Hoa cài áo phù hợp với hoa cầm tay.</li>
          <li>Phụ kiện chân (cho cô dâu đi chân trần trong tiệc cưới bãi biển).</li>
          <li>Nơ đính sau váy tạo điểm nhấn.</li>
        </ul>

        <p>Khi lựa chọn phụ kiện cưới, hãy nhớ rằng "Quá nhiều là không đủ" - sự cân bằng và hài hòa là điều quan trọng nhất. Chọn lựa một vài món phụ kiện chủ đạo phù hợp với váy cưới của bạn sẽ giúp tổng thể trở nên hoàn hảo mà không bị rối mắt. Đặc biệt, bạn nên thử phối đồ hoàn chỉnh ít nhất một lần trước ngày cưới để đảm bảo mọi thứ kết hợp hài hòa với nhau.</p>
      `
    },
    {
      id: 5,
      title: "Chất Liệu Váy Cưới: Từ Ren Đến Lụa, Satin Và Hơn Thế Nữa",
      excerpt: "Tìm hiểu về các loại chất liệu phổ biến trong váy cưới, ưu nhược điểm và độ phù hợp với từng mùa, không gian tiệc cưới.",
      image: "https://picsum.photos/id/1015/800/500",
      date: "25/03/2024",
      author: "Nguyễn Văn Hùng",
      category: "Kiến Thức Váy Cưới",
      content: `
        <p>Chất liệu của váy cưới không chỉ ảnh hưởng đến vẻ ngoài mà còn quyết định đến cảm giác thoải mái, sự vừa vặn và phong cách tổng thể của bộ váy. Mỗi loại vải có đặc tính riêng, phù hợp với các kiểu dáng váy cưới, mùa cưới và không gian tiệc cưới khác nhau. Hãy cùng khám phá chi tiết về các chất liệu phổ biến trong thiết kế váy cưới.</p>

        <h3>1. Ren (Lace)</h3>
        <p>Ren là một trong những chất liệu truyền thống và phổ biến nhất trong váy cưới, mang đến vẻ đẹp tinh tế, nữ tính và lãng mạn.</p>
        <p><strong>Các loại ren phổ biến:</strong></p>
        <ul>
          <li>Ren Chantilly: Nhẹ, mỏng, hoa văn tinh tế.</li>
          <li>Ren Alençon: Đường viền nổi, chi tiết hoa văn sắc nét, sang trọng.</li>
          <li>Ren Venice: Dày, đường viền mạnh mẽ, thường dùng cho các chi tiết riêng biệt.</li>
          <li>Ren Guipure: Không có nền lưới, các mô-típ được kết nối với nhau, hiện đại và táo bạo.</li>
        </ul>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Tạo vẻ đẹp cổ điển, lãng mạn.</li>
          <li>Có thể kết hợp với nhiều chất liệu khác.</li>
          <li>Tạo hiệu ứng xuyên thấu tinh tế khi đặt trên nền vải khác.</li>
          <li>Phù hợp với mọi mùa trong năm.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Một số loại ren có thể gây ngứa hoặc khó chịu trên da nhạy cảm.</li>
          <li>Dễ bị móc, rách nếu không cẩn thận.</li>
          <li>Ren cao cấp thường có giá thành cao.</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Hầu hết các kiểu dáng váy, đặc biệt là váy đuôi cá, váy chữ A, và váy xòe. Ren thường được sử dụng làm lớp phủ ngoài hoặc chi tiết điểm nhấn trên cổ, tay áo, thân váy.</p>

        <h3>2. Lụa (Silk)</h3>
        <p>Lụa là chất liệu tự nhiên cao cấp, mang đến vẻ đẹp sang trọng, mềm mại và óng ả cho váy cưới.</p>
        <p><strong>Các loại lụa phổ biến:</strong></p>
        <ul>
          <li>Lụa Charmeuse: Bề mặt bóng, mặt sau mờ, rũ nhẹ.</li>
          <li>Lụa Mikado: Dày hơn, cấu trúc chặt chẽ, giữ dáng tốt.</li>
          <li>Lụa Dupioni: Bề mặt có vân nổi nhẹ, cứng cáp.</li>
          <li>Lụa Gazar: Trong mờ, hơi cứng, giữ dáng tốt.</li>
          <li>Lụa Shantung: Bề mặt có vân nổi rõ, giống Dupioni nhưng thô hơn.</li>
        </ul>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Sang trọng, mềm mại và thoáng khí.</li>
          <li>Rũ tự nhiên, tạo đường nét uyển chuyển.</li>
          <li>Có độ bóng tự nhiên, không cần đính kết nhiều vẫn đẹp.</li>
          <li>Thoải mái khi mặc, thấm hút mồ hôi tốt.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Giá thành cao.</li>
          <li>Một số loại lụa dễ nhăn và khó bảo quản.</li>
          <li>Có thể hiện vết ướt rõ ràng.</li>
          <li>Cần người may có tay nghề cao.</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Váy cưới đơn giản, thanh lịch, kiểu dáng suông, chữ A, hoặc rũ. Lụa là lựa chọn tuyệt vời cho tiệc cưới vào mùa xuân/hè, hoặc tiệc cưới trong nhà điều hòa.</p>

        <h3>3. Satin</h3>
        <p>Satin có bề mặt bóng mượt, là chất liệu phổ biến tạo nên vẻ sang trọng, thanh lịch cho váy cưới.</p>
        <p><strong>Các loại satin phổ biến:</strong></p>
        <ul>
          <li>Satin Duchess: Dày, cứng cáp, giữ dáng tốt.</li>
          <li>Satin Crepe: Mềm hơn, có bề mặt hơi nhăn nhẹ.</li>
          <li>Satin Faced Organza: Kết hợp giữa satin và organza, nhẹ nhưng vẫn có độ bóng.</li>
        </ul>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Bề mặt bóng mượt, sang trọng.</li>
          <li>Đổ rũ đẹp, tạo dáng váy thanh lịch.</li>
          <li>Có nhiều độ dày khác nhau để lựa chọn.</li>
          <li>Giá cả phải chăng hơn so với lụa tự nhiên.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Một số loại satin dễ nhăn.</li>
          <li>Satin tổng hợp có thể kém thoáng khí.</li>
          <li>Bề mặt bóng có thể làm lộ khuyết điểm.</li>
          <li>Dễ bị trầy xước.</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Váy cưới kiểu dáng cổ điển như ball gown, váy cưới hoàng gia, váy đuôi cá. Satin thích hợp cho tiệc cưới vào mùa thu/đông hoặc trong không gian điều hòa.</p>

        <h3>4. Organza</h3>
        <p>Organza là chất liệu mỏng, nhẹ, trong mờ nhưng cứng cáp, tạo hiệu ứng phồng nhẹ cho váy cưới.</p>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Nhẹ nhàng, thoáng khí.</li>
          <li>Tạo hiệu ứng phồng tự nhiên, thích hợp cho váy nhiều tầng.</li>
          <li>Trong mờ, tạo hiệu ứng lãng mạn.</li>
          <li>Giữ dáng tốt, không bị xẹp.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Dễ bị nhăn.</li>
          <li>Nếu quá nhiều lớp có thể nặng và cứng.</li>
          <li>Cần người may có kinh nghiệm để xử lý đường viền.</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Váy cưới xòe nhiều tầng, váy bồng, váy công chúa. Organza cũng tuyệt vời cho các chi tiết như tay áo phồng, phần overlay hoặc tạo hiệu ứng trong mờ.</p>

        <h3>5. Tulle</h3>
        <p>Tulle là vải lưới mịn, nhẹ, thường được sử dụng cho phần váy xòe, khăn voan và các chi tiết phồng nhẹ.</p>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Rất nhẹ và mềm mại.</li>
          <li>Tạo hiệu ứng phồng, bay bổng.</li>
          <li>Có thể xếp nhiều lớp mà không nặng.</li>
          <li>Giá thành hợp lý.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Dễ móc, rách.</li>
          <li>Quá nhiều lớp có thể gây tiếng sột soạt khi di chuyển.</li>
          <li>Không phù hợp với vùng nhiệt đới (dễ bị xẹp trong độ ẩm cao).</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Váy cưới công chúa, váy xòe, đặc biệt là phần tùng váy. Tulle cũng là chất liệu chính cho khăn voan cô dâu.</p>

        <h3>6. Chiffon</h3>
        <p>Chiffon là chất liệu mỏng, nhẹ, trong mờ và rũ tự nhiên, tạo vẻ đẹp bay bổng, lãng mạn.</p>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Rất nhẹ và thoáng khí.</li>
          <li>Rũ đẹp, tạo chuyển động mềm mại khi di chuyển.</li>
          <li>Tạo vẻ đẹp mơ màng, lãng mạn.</li>
          <li>Phù hợp với thời tiết nóng.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Rất mỏng manh, dễ rách.</li>
          <li>Cần lót trong để không lộ.</li>
          <li>Khó may và xử lý đường viền.</li>
          <li>Dễ bị nhăn.</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Váy cưới mùa hè, váy cưới bãi biển, hoặc các chi tiết như tay áo, dải ruy băng, khăn choàng. Chiffon tạo hiệu ứng bay bổng tuyệt vời cho váy suông, váy Empire và váy Grecian.</p>

        <h3>7. Crepe</h3>
        <p>Crepe có bề mặt hơi gợn sóng, mang lại vẻ đẹp hiện đại, đơn giản nhưng sang trọng.</p>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Rũ tự nhiên, ôm dáng tốt.</li>
          <li>Bề mặt gợn sóng độc đáo che khuyết điểm.</li>
          <li>Ít nhăn hơn so với nhiều chất liệu khác.</li>
          <li>Thoải mái khi mặc.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Khó xử lý khi may.</li>
          <li>Một số loại crepe có thể bị giãn.</li>
          <li>Có thể cần lớp lót tùy thuộc vào độ dày.</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Váy cưới phong cách tối giản, hiện đại, váy suông, váy ôm thẳng (sheath). Crepe là lựa chọn tuyệt vời cho cô dâu theo đuổi phong cách thanh lịch, đương đại.</p>

        <h3>8. Taffeta</h3>
        <p>Taffeta có bề mặt bóng nhẹ và cứng cáp, tạo tiếng sột soạt nhẹ khi di chuyển.</p>
        <p><strong>Ưu điểm:</strong></p>
        <ul>
          <li>Giữ dáng rất tốt.</li>
          <li>Bề mặt bóng nhẹ sang trọng.</li>
          <li>Bền và chắc chắn.</li>
          <li>Ít nhăn, dễ bảo quản.</li>
        </ul>
        <p><strong>Nhược điểm:</strong></p>
        <ul>
          <li>Cứng, có thể không thoải mái khi mặc lâu.</li>
          <li>Phát ra tiếng sột soạt khi di chuyển.</li>
          <li>Không phù hợp với thời tiết nóng.</li>
        </ul>
        <p><strong>Phù hợp với:</strong> Váy cưới kiểu dáng ball gown, váy xòe cứng cáp. Taffeta thích hợp cho tiệc cưới mùa thu/đông hoặc trong không gian điều hòa.</p>

        <h3>Lựa Chọn Chất Liệu Phù Hợp Với Mùa Cưới</h3>
        <p><strong>Mùa Xuân:</strong> Lụa nhẹ, cotton blend, satin mỏng, chiffon, organza.</p>
        <p><strong>Mùa Hè:</strong> Chiffon, cotton, lụa mỏng, batiste, vải ren mỏng, organza nhẹ.</p>
        <p><strong>Mùa Thu:</strong> Satin, taffeta, crepe dày, velvet (nhung) nhẹ, lụa mikado.</p>
        <p><strong>Mùa Đông:</strong> Velvet, satin duchess, taffeta, damask, brocade (gấm), lụa dày, kết hợp với lớp lót ấm.</p>

        <p>Việc lựa chọn chất liệu váy cưới phù hợp không chỉ dựa vào yếu tố thẩm mỹ mà còn cần cân nhắc đến yếu tố thực tiễn như thời gian, địa điểm cưới, thời tiết, và đặc biệt là sự thoải mái của cô dâu. Một chiếc váy cưới đẹp không chỉ là chiếc váy trông lộng lẫy mà còn là chiếc váy giúp bạn tự tin, thoải mái trong suốt ngày trọng đại của mình.</p>
      `
    },
    {
      id: 6,
      title: "Lịch Sử Và Ý Nghĩa Của Váy Cưới Trắng",
      excerpt: "Khám phá nguồn gốc và ý nghĩa của truyền thống mặc váy cưới màu trắng, từ Hoàng gia đến hiện đại.",
      image: "https://picsum.photos/id/1016/800/500",
      date: "20/03/2024",
      author: "Lê Hoàng Anh",
      category: "Văn Hóa Cưới",
      content: `
        <p>Váy cưới trắng đã trở thành biểu tượng không thể thiếu trong các lễ cưới hiện đại, đến mức nhiều người cho rằng đây là truyền thống có từ xa xưa. Tuy nhiên, lịch sử của váy cưới trắng thực sự mới chỉ bắt đầu trong khoảng 200 năm gần đây. Hãy cùng khám phá câu chuyện thú vị về nguồn gốc và ý nghĩa của váy cưới trắng qua dòng thời gian.</p>

        <h3>1. Trước Thế Kỷ 19: Khi Váy Cưới Trắng Chưa Phải Là Chuẩn Mực</h3>
        <p>Trước thế kỷ 19, không có màu sắc cụ thể nào được coi là "màu cưới" truyền thống. Cô dâu thường mặc những bộ váy đẹp nhất mà họ có, thường là những màu sắc rực rỡ và được trang trí cầu kỳ để thể hiện sự giàu có và địa vị xã hội. Nhiều cô dâu chọn các tông màu như đỏ, xanh, vàng hoặc thậm chí đen (đặc biệt phổ biến ở Scandinavia và các vùng của Tây Ban Nha).</p>
        <p>Đối với giới thượng lưu, váy cưới thường được may bằng những chất liệu đắt tiền như lụa, nhung, gấm và được điểm xuyết bằng đá quý, thêu tay tinh xảo. Thực tế, nhiều cô dâu sau đó tiếp tục sử dụng váy cưới của họ trong các dịp đặc biệt khác, sau khi đã điều chỉnh lại cho phù hợp.</p>
        <p>Màu trắng, vào thời điểm đó, không phải là lựa chọn phổ biến vì hai lý do chính:</p>
        <ul>
          <li>Vải trắng rất khó giữ sạch trong thời kỳ trước khi có máy giặt hiện đại.</li>
          <li>Để có được vải trắng tinh khiết là điều rất khó khăn và đắt đỏ.</li>
        </ul>
        <p>Do đó, màu trắng thường chỉ được giới quý tộc và hoàng gia sử dụng trong một số dịp đặc biệt, thể hiện sự giàu có và đặc quyền.</p>

        <h3>2. Sự Kiện Thay Đổi Lịch Sử: Đám Cưới Của Nữ Hoàng Victoria Năm 1840</h3>
        <p>Sự chuyển đổi lớn trong truyền thống váy cưới diễn ra vào năm 1840, khi Nữ hoàng Victoria của Anh kết hôn với Hoàng tử Albert xứ Saxe-Coburg và Gotha. Thay vì mặc áo choàng hoàng gia truyền thống với màu sắc rực rỡ, Victoria đã chọn một chiếc váy trắng đơn giản (theo tiêu chuẩn hoàng gia) làm từ lụa satin màu kem và được trang trí với ren trắng.</p>
        <p>Lựa chọn này của Victoria được cho là xuất phát từ nhiều lý do:</p>
        <ul>
          <li>Thể hiện tình yêu thực sự với Albert (không phải một cuộc hôn nhân chỉ vì lý do chính trị).</li>
          <li>Tôn vinh ngành công nghiệp ren của Anh (ren trên váy được sản xuất thủ công tại Honiton và Beer, Devon).</li>
          <li>Mong muốn xuất hiện như một "người phụ nữ" hơn là một nữ hoàng, với sự trong trắng và tinh khiết.</li>
        </ul>
        <p>Đám cưới hoàng gia này đã được chú ý và đưa tin rộng rãi, và hình ảnh của Victoria trong chiếc váy cưới trắng đã nhanh chóng lan truyền khắp châu Âu và Mỹ. Các tạp chí thời trang và báo chí đương thời đều ca ngợi sự lựa chọn của bà, và nhanh chóng, phụ nữ ở mọi tầng lớp xã hội bắt đầu mơ ước về váy cưới trắng "như của nữ hoàng".</p>

        <h3>3. Thế Kỷ 19-20: Sự Phát Triển Của Ý Nghĩa Văn Hóa</h3>
        <p>Sau đám cưới của Victoria, màu trắng dần dần được gắn với ý nghĩa về sự trong trắng và trinh bạch. Giáo hội Cơ đốc giáo đã hỗ trợ cho xu hướng này, khuyến khích các cô dâu mặc trắng như biểu tượng của sự tinh khiết và trinh tiết.</p>
        <p>Vào cuối thế kỷ 19, một câu nói phổ biến đã xuất hiện trong văn hóa phương Tây:</p>
        <blockquote>
          "Married in white, you have chosen all right" (Kết hôn trong màu trắng, bạn đã chọn đúng đắn)
        </blockquote>
        <p>Khi xã hội phương Tây bước vào thời kỳ Victoria, các giá trị về đức hạnh và sự trong trắng càng được đề cao, và váy cưới trắng trở thành biểu tượng không chỉ của sự tinh khiết mà còn của địa vị xã hội và sự giàu có (vì vải trắng vẫn còn đắt đỏ và khó bảo quản).</p>
        <p>Đến đầu thế kỷ 20, với sự phát triển của sản xuất hàng loạt và công nghệ dệt may, váy cưới trắng dần trở nên phổ biến hơn và có thể tiếp cận được với nhiều tầng lớp xã hội hơn, không chỉ giới thượng lưu.</p>

        <h3>4. Thời Kỳ Sau Thế Chiến II: Sự Bùng Nổ Của "Giấc Mơ Váy Cưới Trắng"</h3>
        <p>Sau Thế chiến II, xã hội phương Tây bước vào thời kỳ phục hưng kinh tế và gia tăng tầng lớp trung lưu. Đây cũng là thời điểm mà "giấc mơ váy cưới trắng" thực sự bùng nổ. Các yếu tố góp phần vào xu hướng này bao gồm:</p>
        <ul>
          <li>Đám cưới của các nhân vật nổi tiếng, đặc biệt là Công nương Grace Kelly năm 1956, với chiếc váy cưới trắng lộng lẫy đã trở thành biểu tượng.</li>
          <li>Sự phát triển của ngành công nghiệp thời trang cưới, với các thương hiệu chuyên biệt và các nhà thiết kế nổi tiếng.</li>
          <li>Sự xuất hiện của các tạp chí cưới, sách hướng dẫn, và sau này là các chương trình truyền hình về đám cưới.</li>
          <li>Sự thay đổi trong nhận thức xã hội: váy cưới trắng không còn chỉ biểu trưng cho sự trinh tiết mà còn là biểu tượng của tình yêu, sự khởi đầu mới, và truyền thống cưới hỏi.</li>
        </ul>
        <p>Vào những năm 1980, đám cưới của Công nương Diana với Hoàng tử Charles một lần nữa củng cố xu hướng váy cưới trắng cầu kỳ, với chiếc váy xòe lộng lẫy của bà trở thành biểu tượng thời trang cưới trong nhiều thập kỷ.</p>

        <h3>5. Thế Kỷ 21: Truyền Thống Và Sự Đổi Mới</h3>
        <p>Trong thế kỷ 21, váy cưới trắng vẫn là lựa chọn phổ biến nhất, nhưng ý nghĩa và cách diễn giải đã trở nên đa dạng hơn nhiều. Ngày nay, các cô dâu chọn váy trắng vì nhiều lý do:</p>
        <ul>
          <li>Tôn trọng truyền thống và mong muốn có một đám cưới "cổ điển".</li>
          <li>Vẻ đẹp thẩm mỹ của màu trắng: dễ phối với các màu sắc khác và nổi bật trong ảnh cưới.</li>
          <li>Biểu tượng của sự khởi đầu mới, trang giấy trắng cho chương mới của cuộc đời.</li>
          <li>Sự đa dạng của "màu trắng": từ trắng tinh khiết đến ngà, kem, champagne, và nhiều sắc thái khác.</li>
        </ul>
        <p>Đồng thời, nhiều cô dâu hiện đại cũng đang phá vỡ truyền thống này bằng cách chọn váy cưới màu pastel, đỏ, vàng gold, hoặc thậm chí là các thiết kế nhiều màu sắc. Một số khác lại tìm đến các tông màu trắng phi truyền thống như xám trắng, xanh băng, hoặc hồng phấn rất nhạt.</p>
        <p>Trong các nền văn hóa khác, màu trắng không phải lúc nào cũng là màu truyền thống cho đám cưới. Ví dụ:</p>
        <ul>
          <li>Trong văn hóa Trung Quốc truyền thống, đỏ là màu may mắn và thịnh vượng, thường được sử dụng trong trang phục cưới.</li>
          <li>Ở Ấn Độ, áo cưới truyền thống (Lehenga hoặc Sari) thường có màu đỏ, vàng, hoặc nhiều màu sắc rực rỡ.</li>
          <li>Tại Nhật Bản, cô dâu truyền thống mặc kimono trắng (shiromuku) tượng trưng cho sự tinh khiết, nhưng cũng thường thay đổi sang kimono đỏ (iro-uchikake) trong buổi lễ.</li>
        </ul>

        <h3>Kết Luận: Hơn Cả Một Màu Sắc</h3>
        <p>Lịch sử của váy cưới trắng cho thấy rằng, ngay cả những truyền thống tưởng chừng "cổ xưa và bất biến" cũng có thể có nguồn gốc khá mới mẻ và đầy tính ngẫu nhiên. Từ lựa chọn cá nhân của một nữ hoàng trẻ vào năm 1840, váy cưới trắng đã trở thành một hiện tượng văn hóa toàn cầu, thay đổi ý nghĩa và cách diễn giải qua từng thời kỳ.</p>
        <p>Ngày nay, màu trắng trong váy cưới đã vượt ra khỏi ý nghĩa ban đầu về sự tinh khiết hay trinh bạch, trở thành biểu tượng của truyền thống, sự lãng mạn, và khởi đầu mới. Điều quan trọng nhất có lẽ là mỗi cô dâu đều có quyền tự do lựa chọn màu sắc phù hợp với cá tính, văn hóa và mong muốn cá nhân của mình cho ngày trọng đại.</p>
        <p>Cho dù bạn chọn trắng tinh khôi, kem nhẹ nhàng, hay bất kỳ màu sắc nào khác, hãy nhớ rằng truyền thống tốt nhất là truyền thống mang lại niềm vui và ý nghĩa cho chính bạn trong ngày cưới của mình.</p>
      `
    }
  ];

  const blog = blogs.find(blog => blog.id === blogId);

  if (!blog) {
    navigate('/blog');
    return null;
  }

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blog.image}
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="heading-xl text-white text-center px-4">{blog.title}</h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <article className="bg-white p-6 rounded-sm shadow-sm">
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.category}</span>
                </div>
                
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Tags:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-wedding-cream text-gray-600 text-xs rounded-sm">Váy Cưới</span>
                        <span className="px-3 py-1 bg-wedding-cream text-gray-600 text-xs rounded-sm">{blog.category}</span>
                        <span className="px-3 py-1 bg-wedding-cream text-gray-600 text-xs rounded-sm">Xu Hướng</span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm hover:border-wedding-gold hover:text-wedding-gold">
                        FB
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm hover:border-wedding-gold hover:text-wedding-gold">
                        IG
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm hover:border-wedding-gold hover:text-wedding-gold">
                        PT
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Author bio */}
              <div className="mt-8 bg-wedding-cream p-6 rounded-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={`https://picsum.photos/id/${100 + blogId}/200/200`} 
                      alt={blog.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium">{blog.author}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Chuyên gia tư vấn váy cưới với hơn 10 năm kinh nghiệm trong ngành. Đam mê khám phá và chia sẻ những xu hướng mới nhất về thời trang cưới để giúp mỗi cô dâu tìm được chiếc váy hoàn hảo cho ngày trọng đại.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related posts */}
              <div className="mt-12">
                <h2 className="heading-md mb-6">Bài Viết Liên Quan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {blogs
                    .filter(b => b.category === blog.category && b.id !== blog.id)
                    .slice(0, 3)
                    .map(relatedBlog => (
                      <article key={relatedBlog.id} className="bg-white rounded-sm overflow-hidden shadow-sm">
                        <div className="relative overflow-hidden h-48">
                          <img 
                            src={relatedBlog.image} 
                            alt={relatedBlog.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-serif mb-2">
                            <Link to={`/blog/${relatedBlog.id}`} className="hover:text-wedding-gold transition-colors">
                              {relatedBlog.title}
                            </Link>
                          </h3>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{relatedBlog.date}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Tìm Kiếm</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm bài viết..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
                  />
                  <button className="absolute right-3 top-2 text-gray-500">
                    🔍
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Bài Viết Mới Nhất</h3>
                <ul className="space-y-4">
                  {blogs.slice(0, 3).map((recentBlog) => (
                    <li key={recentBlog.id} className="flex space-x-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={recentBlog.image} 
                          alt={recentBlog.title} 
                          className="w-full h-full object-cover rounded-sm"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">
                          <Link to={`/blog/${recentBlog.id}`} className="hover:text-wedding-gold transition-colors">
                            {recentBlog.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{recentBlog.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-wedding-cream p-6 rounded-sm mb-8">
                <h3 className="heading-sm mb-4">Danh Mục</h3>
                <ul className="space-y-3">
                  {[...new Set(blogs.map(blog => blog.category))].map((category, index) => {
                    const count = blogs.filter(blog => blog.category === category).length;
                    return (
                      <li key={index}>
                        <a href="#" className="flex items-center justify-between hover:text-wedding-gold transition-colors">
                          <span>{category}</span>
                          <span className="bg-white text-gray-500 px-2 py-1 text-xs rounded-full">{count}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-wedding-cream p-6 rounded-sm">
                <h3 className="heading-sm mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Váy Cưới</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Cô Dâu</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Xu Hướng</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Vintage</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Minimalist</a>
                  <a href="#" className="px-3 py-1 bg-white text-gray-600 text-xs rounded-sm hover:bg-wedding-gold hover:text-white transition-colors">Lễ Cưới</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
