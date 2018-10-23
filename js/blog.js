
    /* --- blog form BEGIN --- */
    let comments = [];
    // localStorage.clear();
    let saved = JSON.parse(localStorage.getItem('comments'));

    if (localStorage.getItem('comments')) {
        saved.forEach(function (elem) {

            let newComment = document.createElement('div');
            newComment.classList.add('comment');

            let author = document.createElement('span');
            author.classList.add('posted-by');
            author.textContent = elem.author;

            let commentText = document.createElement('p');
            commentText.classList.add('comment__text');
            commentText.textContent = elem.comment;

            newComment.insertAdjacentElement('beforeend', author);
            newComment.insertAdjacentElement('beforeend', commentText);

            comments.push({
                "author": elem.author,
                "email": elem.email,
                "website": elem.website,
                "comment": elem.comment
            });

            document.querySelector('.comments').insertAdjacentElement('beforeend', newComment);
        });
    }

    /* blog-form-validation BEGIN */
    function validate(inputs) {

        let allAreValid = true;

        for (let i = 0; i < inputs.length; i++) {

            if (!inputs[i].hasAttribute('data-required')) {
                continue;
            }

            if (inputs[i].getAttribute('name') === 'name') {
                allAreValid = (inputs[i].value.trim() === '') ? warning(inputs[i]) : allAreValid;
            } else if (inputs[i].getAttribute('name') === 'email') {
                allAreValid = (!inputs[i].value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) ? warning(inputs[i]) : allAreValid;
            } else if (inputs[i].getAttribute('name') === 'text') {
                allAreValid = (inputs[i].value.trim() === '') ? false : allAreValid;
            }
        }
        return allAreValid;
    }

    function warning(item) {
        item.classList.add('warning');
        setTimeout(function () {
            item.classList.remove('warning');
        }, 4000);
        return false;
    }
    /* blog-form-validation END */

    var blogButton = document.querySelector('.blog__button');
    blogButton.addEventListener('click', function () {

        let formBlog = document.querySelector('.form__blog');

        if (!validate(formBlog)) {
            return;
        }

        let name = formBlog.querySelector('.form-blog__input--name');
        let email = formBlog.querySelector('.form-blog__input--email');
        let website = formBlog.querySelector('.form-blog__input--website');
        let text = formBlog.querySelector('.form-blog__textarea');

        comments.push({
            "author": name.value,
            "email": email.value,
            "website": website.value,
            "comment": text.value
        });

        let newComment = document.createElement('div');
        newComment.classList.add('comment');

        let author = document.createElement('span');
        author.classList.add('posted-by');
        author.textContent = name.value;

        let commentText = document.createElement('p');
        commentText.classList.add('comment__text');
        commentText.textContent = text.value;

        newComment.insertAdjacentElement('beforeend', author);
        newComment.insertAdjacentElement('beforeend', commentText);

        document.querySelector('.comments').insertAdjacentElement('beforeend', newComment);

        text.value = '';

        var serial = JSON.stringify(comments);
        localStorage.setItem('comments', serial);
        var parseJson = JSON.parse(localStorage.getItem('comments'));
        console.log(parseJson);
    });
    /* --- blog form END --- */


    let blogs = [
        {
            id: "blog-1",
            date: "March 24, 2018",
            image: "",
            thumbnail: "",
            description: "Some small description for this article",
            title: "Step Torward Developing A Content Strategy",
            author: "Mastia",
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto saepe enim in, dicta excepturi deleniti amet magnam quo ut eius earum sit, omnis sequi quidem eveniet, corrupti est accusamus doloremque odio. Molestias cum suscipit ipsa unde quae nulla doloremque tenetur quo labore, eaque aperiam enim numquam ad explicabo corrupti minus repellendus. Illo recusandae harum explicabo eveniet quae nobis doloribus assumenda ad deserunt cum magni voluptatibus porro non praesentium, iusto voluptas debitis architecto unde ipsam, ea facilis dolore adipisci, fugit expedita. Officia facere id quos eos, earum nostrum sapiente qui est. Eos, eligendi non quas nostrum vitae fugiat nihil perspiciatis ipsum. Molestiae ad aliquam, harum ducimus vel quod, adipisci provident dolorem reprehenderit possimus aspernatur! Labore, veniam culpa? Distinctio quaerat, odit tempora saepe earum accusamus neque, explicabo facilis placeat ex nam voluptas. Quis incidunt doloribus officiis nisi praesentium culpa consequatur vero laudantium, qui odit labore quas! Delectus qui iste sed beatae voluptates quaerat tempora non mollitia magni magnam cumque vero reprehenderit soluta odio explicabo cupiditate esse voluptate consequatur aliquam rerum labore, quis officia. Dicta labore qui numquam? Magnam atque iure odio iste tenetur, voluptas placeat quam, expedita rem, laudantium architecto consectetur? Dignissimos unde nobis corrupti quasi doloribus rem commodi quae obcaecati eaque modi quam incidunt placeat provident delectus molestias qui quos, quia repellat facere iusto. Quibusdam, quos. Corporis pariatur dolorem blanditiis, architecto nisi officiis reprehenderit consequatur ut, dicta tenetur minima rem eligendi, quae nesciunt inventore? Molestiae cumque, necessitatibus exercitationem corporis fugit assumenda excepturi, soluta iure nostrum quidem cupiditate qui voluptas ex repellendus ea iusto consectetur saepe amet repudiandae eligendi. Cumque sunt beatae autem numquam earum explicabo nostrum amet voluptate, eveniet quasi enim consectetur excepturi ipsa, incidunt quibusdam ducimus sed deserunt quia. Quos possimus iusto labore cumque architecto ea tempore animi, velit ipsum laborum blanditiis eaque repudiandae aliquid laudantium dolorum quas quae aut sequi quidem dolorem asperiores quis maiores et odio! Asperiores iure magnam quod nemo amet iusto totam ut illo cum, tenetur, expedita fuga voluptate corporis minus commodi minima maiores. Id quasi accusantium esse quisquam harum maiores ipsam natus a laudantium dicta dolores animi placeat labore, autem eum facilis fugit iusto quibusdam accusamus corporis dolorum maxime. Sed blanditiis similique tempore excepturi veniam! Incidunt, asperiores! Dignissimos voluptatem ex, obcaecati quaerat distinctio, unde ipsum, pariatur quam recusandae consectetur illo nostrum maxime minus perspiciatis ullam consequuntur corrupti delectus quod quas voluptas placeat. Sunt, iusto earum? Distinctio sed incidunt, quaerat sunt hic odit iure sit harum nesciunt possimus culpa ullam, earum nobis id, vitae dolorem! Eum voluptate eos dolorum deleniti. Ipsam corrupti voluptatem doloribus? Fugit mollitia debitis facilis, voluptatum optio rem eligendi temporibus repellat officiis reprehenderit commodi expedita, explicabo illum architecto necessitatibus iusto aspernatur cupiditate similique accusamus doloribus! Repellendus, voluptatum harum. Nisi, eos fugit, quod expedita unde debitis ullam necessitatibus nobis, neque commodi cumque praesentium quibusdam modi. Quas praesentium nihil vitae? In quasi velit, commodi quod porro quibusdam aliquid ex perferendis sed dolores vero magnam maxime doloremque reiciendis libero placeat itaque blanditiis dignissimos possimus adipisci illo, cum accusantium voluptatum error? Animi quas expedita sunt explicabo, sequi labore natus sit. Architecto eaque deleniti molestias laudantium iusto inventore a aliquid minus magnam repellat? Tenetur incidunt voluptatem dolores at?`,
        },
        {
            id: "blog-2",
            date: "April 03, 2018",
            image: "",
            thumbnail: "",
            description: "One more small description for this article",
            title: "Coolest Article Ever",
            author: "Unspeackable",
            text: `Adipisicing elit. Ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam fuga sequi velit aperiam dolorem in eum pariatur voluptatum accusamus. Corrupti, non et. Itaque exercitationem quae minus ab, iste ducimus sit culpa perspiciatis iure neque inventore in maxime aspernatur velit dicta, similique asperiores! Error iure necessitatibus hic nesciunt alias saepe quaerat itaque molestiae placeat? Repellendus explicabo consectetur, cum ab ut, architecto veniam tempore facere numquam quod, nulla impedit illo. Dolorum accusantium enim, voluptas laboriosam eaque, cupiditate asperiores libero modi quisquam dignissimos quos magni. Eveniet, est accusamus? Ratione nemo officia corporis, animi aspernatur suscipit velit ab cumque autem ipsum tenetur facere veritatis sit repudiandae culpa temporibus. Rerum maiores nihil doloremque maxime nulla reiciendis sequi blanditiis reprehenderit! Distinctio, est alias. Nihil repellat rerum ut fugiat necessitatibus minus velit beatae, unde minima explicabo magnam numquam inventore labore vero voluptas ullam assumenda harum adipisci distinctio facilis. Earum qui pariatur quo, eius ducimus, veritatis cumque nesciunt unde sit fugiat explicabo? Ea nihil odio dicta itaque ad excepturi quasi distinctio atque esse ex, nesciunt magni ratione deleniti vero sapiente? Perspiciatis deserunt consectetur veniam placeat adipisci quisquam modi, ipsum iure tempore quidem itaque quae eum incidunt voluptatem dolores libero at commodi ab temporibus sunt ad eligendi, nemo quia voluptate. Hic omnis facilis, ex molestias facere dolor debitis vitae incidunt commodi aperiam nobis esse nulla ipsum! Suscipit enim molestias in a voluptatum eius natus nihil perferendis veniam, quae harum numquam, earum sint doloribus consequuntur dicta totam, officia atque esse tenetur. Pariatur maxime hic officia illum quae quas saepe obcaecati facere praesentium quidem iusto, ab repellat quaerat fuga, libero, voluptatum perspiciatis provident vero ipsam cupiditate commodi neque fugit nesciunt? Eius suscipit vel facere dicta veniam ad, voluptas illo est temporibus, distinctio labore? Quo harum nihil sequi? Quo, expedita blanditiis fugiat molestiae voluptatibus, nulla laudantium corrupti impedit dolorem aliquam quia nisi animi ipsum laboriosam labore possimus magnam est. Expedita, architecto atque totam quasi maiores molestias quia ex blanditiis sunt facere magni? Voluptates id dolor sequi quaerat velit esse reprehenderit, beatae, laborum nisi perspiciatis assumenda voluptas est optio quia. Et dolorem ad minus ut sed dignissimos libero cupiditate nam, labore expedita quaerat. Possimus error repellendus quas nulla eius obcaecati debitis, magni architecto quasi qui dignissimos unde placeat ullam perspiciatis ut aliquam laboriosam necessitatibus labore molestias minima neque quos! Perspiciatis et commodi sapiente aliquam doloribus, asperiores quisquam impedit maiores inventore a? Consectetur veritatis est atque illo voluptas modi ipsa voluptatum asperiores non aperiam, unde eveniet nemo amet soluta libero, dolor saepe architecto reiciendis ab, dolorum harum. Repellendus, harum fugit error doloribus, architecto autem facilis corporis hic culpa adipisci debitis nostrum optio quia pariatur suscipit reiciendis ab, dolore numquam accusantium? Quisquam, beatae pariatur expedita at, asperiores natus magnam fuga dignissimos ea quia rem adipisci. Animi odit odio architecto. Porro soluta dolor assumenda ullam veritatis dignissimos cum animi ex dolorum perferendis est non, explicabo amet ut doloribus, vero inventore culpa architecto? Hic nemo quos laboriosam mollitia dicta. Totam commodi omnis, facere sunt at, corporis architecto officiis, officia doloremque veritatis temporibus veniam placeat sit eos facilis nam? Exercitationem ipsum dignissimos pariatur ipsa possimus eius ullam error quas deleniti quae facere saepe officia soluta atque, beatae unde a, omnis numquam? Doloremque quod tempore, maiores quam odio ex nulla dolor, aliquam aperiam quis iusto ipsam modi commodi.`,
        },
        {
            id: "blog-3",
            date: "April 12, 2018",
            image: "",
            thumbnail: "",
            description: "Another small description for this article",
            title: "You can do it!",
            author: "Offspring",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil, vel mollitia qui autem temporibus cupiditate. Quos reiciendis cum commodi fuga maiores, maxime voluptatum odit atque dolorem sunt beatae incidunt deserunt dolore ex dignissimos quam nihil quis a. Sapiente deleniti cupiditate, voluptatibus sint commodi praesentium a facilis doloribus eius itaque iusto, nesciunt aliquam explicabo enim iure maiores? Recusandae dolorem fuga, velit molestiae corrupti quod minima eum sit totam itaque? Officiis corrupti nostrum commodi fugit voluptatibus minus obcaecati soluta ab odio sit impedit, non quibusdam architecto, accusantium ipsa reiciendis error ipsam reprehenderit molestiae expedita, amet esse recusandae dolor aut. Fugit cumque maiores accusamus. Dolorum officiis inventore dignissimos eum sint molestias numquam soluta error optio, totam consequuntur. Quo, libero quia? Optio molestias porro, corrupti molestiae voluptates eos reiciendis nostrum mollitia atque delectus rerum. Veritatis odio sint aperiam quas est odit itaque voluptas harum quam consectetur minus eos suscipit velit praesentium magnam sit corporis molestias, voluptates eveniet modi expedita dicta reprehenderit vel! Totam, veritatis suscipit exercitationem quia, et eos illo qui distinctio voluptate, vel aut modi officiis illum commodi cum maiores laboriosam! Iste est ipsa recusandae beatae cumque inventore quod nemo magnam dicta adipisci doloribus dolorem, impedit explicabo aliquid qui culpa sint eum quam quia nesciunt! Porro officiis ea ab molestiae ipsa voluptate molestias possimus rem unde neque architecto illum, ipsam impedit quia nemo dignissimos distinctio fugit repellendus voluptatum eveniet. Corrupti minima, ullam non repudiandae facilis pariatur, recusandae repellendus corporis sapiente, perspiciatis animi? Minus tempora explicabo, cupiditate modi unde soluta dolor incidunt officiis voluptate eligendi ipsam, aliquam architecto ullam officia quidem? Minima asperiores ut quam consequatur ipsam suscipit officiis quaerat ea explicabo, aspernatur nihil necessitatibus ex voluptas ratione voluptate corrupti! Atque nulla, vel nesciunt consequatur, impedit saepe officia nostrum dicta at doloremque harum, laudantium iusto odit necessitatibus dignissimos asperiores voluptatem accusantium! Minus doloribus debitis nulla eius asperiores nisi aut culpa aspernatur assumenda, tempora aliquam. Ducimus vel distinctio at explicabo quam est corporis itaque iure doloremque consequatur, et laborum sit alias sed placeat, quasi voluptates perspiciatis perferendis, dolorem impedit voluptas cum eveniet ipsa. Autem quis eaque magni, doloribus aliquid laudantium ullam delectus quas veritatis ducimus. Nam repudiandae provident sapiente reiciendis magni tenetur veritatis dicta voluptatum atque. Beatae laboriosam eaque ullam? Repellendus dolorum natus beatae amet incidunt atque, laudantium obcaecati cumque aperiam nemo assumenda! Illum consectetur a dicta deleniti possimus in, libero fugiat vitae provident, perferendis excepturi cumque fuga dolor eum, temporibus dolorem cum veritatis iure? Fugit pariatur placeat commodi vel nulla iste, distinctio dignissimos cumque? Eius sint labore nihil beatae tenetur debitis itaque accusantium est odit molestiae sit, iure consectetur voluptate dolore placeat fugiat similique. Odit perspiciatis praesentium ex repellat assumenda, voluptatibus cumque voluptas nam, incidunt voluptatum aspernatur tenetur distinctio ipsa saepe beatae cum, dolore accusamus error itaque autem vitae. Illum, vel iste odio similique recusandae nobis enim aspernatur dignissimos, expedita reprehenderit, unde praesentium dolore iusto vero temporibus porro laudantium placeat atque doloribus magni. Minima nulla commodi sed laborum, qui magni? Ullam ducimus laboriosam quas, ex, hic aspernatur dolorem placeat, totam modi fugiat ipsa!`,
        },
        {
            id: "blog-4",
            date: "April 25, 2018",
            image: "",
            thumbnail: "",
            description: "Mega small description for this article",
            title: "It's so hard to make some title",
            author: "Oleksii",
            text: `Amet consectetur adipisicing elit. Amet sed aliquam nostrum porro eius praesentium exercitationem vel quo facilis at? Accusantium totam facere impedit laboriosam numquam sequi quam laborum non officia corrupti odio corporis culpa aliquam, eum repellat? Impedit, dolores, inventore libero quam eveniet aspernatur architecto quas, laborum doloremque ipsum commodi neque porro adipisci magni nam maxime voluptatem veniam temporibus eius! Nobis tempora laborum, quidem voluptatum, quibusdam vel accusantium nostrum quis doloribus dolorum explicabo. Non, itaque possimus sit rem, consequuntur magnam maiores nisi perspiciatis ex reprehenderit perferendis temporibus rerum cum maxime dicta eveniet illo molestiae quis ut quo! Fuga saepe quisquam ipsam maxime? Quaerat dolore porro velit quam quis repudiandae corrupti accusamus consequuntur mollitia nobis, esse cum, neque eveniet, tempora ducimus possimus sed. Aliquam, velit! Quod aut culpa dolores praesentium sed cum ab optio officia cupiditate incidunt maiores, voluptate, saepe quia consectetur. Esse illo minima iure ex sequi sed fugiat voluptatum, ducimus veritatis, corporis odio consequuntur exercitationem nemo, harum praesentium enim eum earum cum totam magnam quisquam unde. Suscipit ducimus aut, iure saepe dicta sint eligendi ipsum qui eum voluptas eius mollitia sapiente dolores error at quas in odit quos voluptatem sit! Optio velit nihil beatae odio ad illo itaque doloribus ratione voluptates dolor unde cupiditate sint similique dolorem, doloremque, voluptatibus praesentium id, ullam possimus hic? Veniam, optio cumque? Expedita ullam distinctio quia fugit, voluptatem, amet illo sit cumque maiores porro eos asperiores suscipit assumenda cupiditate aliquam tempora nesciunt voluptatibus modi! Illum velit rem quasi. Nemo, dolore animi quasi soluta, dolorum aliquid incidunt quis possimus saepe quidem illo laudantium. Amet totam ut molestias. Dolorum illo eveniet quo delectus consectetur consequuntur nemo nostrum repudiandae ullam, eaque, odit culpa. Nesciunt, consectetur quo perferendis possimus eum tenetur quia eligendi. Autem distinctio quaerat nostrum perferendis, fuga ad facilis itaque suscipit, molestias ullam enim voluptate, explicabo asperiores blanditiis sunt non corporis sapiente unde praesentium! Vero a voluptate labore nobis, amet quisquam repudiandae totam, tempore ut numquam error earum eveniet obcaecati laboriosam magnam quam. Harum, cumque. Dicta animi impedit dignissimos velit, fugiat incidunt adipisci vel nam sint molestias, quos tenetur distinctio voluptatem nostrum atque odit placeat quisquam quasi facilis sunt eius est. Ducimus ut nisi soluta obcaecati explicabo! Quisquam, adipisci at! Deleniti sapiente eligendi laudantium inventore magni sit commodi hic voluptatum optio excepturi, non atque, quo modi qui omnis itaque dolores in. Facilis nostrum dolorem expedita illo sunt eum eaque! Accusamus, autem asperiores! Architecto voluptatem non dolore repellendus eius dolor! Beatae, sed tenetur. Delectus tenetur maiores sunt quasi aspernatur modi dignissimos, maxime laboriosam magni eveniet repellat error ea voluptas quia fuga velit, qui labore soluta eum itaque libero numquam saepe pariatur quam. Necessitatibus, quae nisi ipsum dolorem iure reprehenderit quam eius eligendi voluptate incidunt tenetur non minima, nesciunt aperiam sed molestias velit maxime ratione temporibus maiores mollitia expedita quos commodi! Quae eveniet voluptate neque optio doloremque, esse aliquam nisi provident id porro nemo ratione quaerat veniam nostrum, eaque amet veritatis quod quasi? Accusamus cumque quam, consequatur doloribus dolorum adipisci odio beatae molestiae voluptates autem quos consectetur perspiciatis, delectus recusandae aliquam libero ipsam corrupti, repellendus nesciunt ducimus! Illum possimus, consequatur illo voluptatibus, quam nulla fugiat maxime amet ducimus minus error, ad dolorem modi nihil accusantium harum laudantium autem aspernatur. Tempore corrupti voluptatem saepe.`,
        },
        {
            id: "blog-5",
            date: "May 01, 2018",
            image: "",
            thumbnail: "",
            description: "Simple and small description for this article",
            title: "Mir, trud, may!",
            author: "Komunyaka",
            text: `Quos et, porro odio, officiis natus, ad quisquam repellat consequatur voluptate provident perspiciatis numquam. Odio iure maxime, quibusdam explicabo dolorum velit dolore nemo fugiat magni qui excepturi reiciendis nihil! Omnis neque rerum quam iste ab assumenda, voluptatum quo vero, sequi, tenetur dolorum impedit iusto hic quod! Laboriosam voluptate maiores, exercitationem voluptatem voluptatum, mollitia odio quisquam deserunt accusamus animi laudantium illum consequuntur nihil. Libero consequuntur quis aliquam, quidem maiores provident repellendus assumenda dignissimos error nostrum, ipsa necessitatibus, ratione eius repudiandae iusto? Ut autem officiis consequatur voluptatibus aliquid temporibus necessitatibus amet omnis, ea labore laborum, non excepturi porro ab quod, doloribus doloremque dolore? Repellendus modi est accusamus sint impedit error voluptatum exercitationem recusandae quibusdam molestias qui perspiciatis dolorum neque vero cum in et veritatis laboriosam, quis nulla similique ullam nam fugiat atque. Illum incidunt quibusdam molestias dolor possimus ea quasi sed aliquam blanditiis vel, obcaecati cupiditate, ipsum facilis, maiores omnis minus. Repellendus, expedita. Consequuntur vitae eius repellat incidunt eveniet aut ad! Harum beatae, voluptatem officia autem maiores officiis, impedit dolor ea, quia esse sit. Cumque architecto temporibus voluptates sit saepe dolorem aliquam distinctio recusandae, sint ullam perferendis, fugiat nulla ipsa sed ex eligendi repellat veniam quod reprehenderit facere sunt incidunt delectus esse. Quas, adipisci facilis! Recusandae expedita, sint odio nemo eaque repellendus facere reprehenderit? Quisquam corrupti iste eos magnam nihil saepe eum temporibus quas vero quaerat doloribus tempore autem placeat, debitis totam at consectetur perferendis ipsum? Cumque dolorum temporibus perspiciatis molestiae, soluta voluptas saepe accusantium dignissimos doloremque provident reiciendis illum delectus, error ipsam harum debitis quod aliquam assumenda exercitationem ut repudiandae ex laborum tempore. Totam obcaecati adipisci soluta animi perspiciatis fuga quo, quas ea consequatur fugit vero pariatur praesentium optio sint porro amet, cumque nesciunt accusamus voluptas nemo atque voluptatem. Consectetur eligendi cum, expedita, sapiente dignissimos omnis ipsa aliquam eos alias quos assumenda maiores veritatis ex dicta, reiciendis rem laborum accusamus molestias perspiciatis saepe incidunt architecto? Eaque esse perspiciatis tenetur cumque. Molestias facere facilis adipisci nisi dolorem perferendis excepturi doloribus molestiae debitis! Delectus, dicta dolorem officia hic impedit commodi sequi, enim repellendus sunt quod natus deserunt sed pariatur unde eaque earum a ratione culpa, voluptate vero architecto tempore harum vel et? Deleniti dolorem nam rerum iusto accusamus. Saepe facere odit minima, exercitationem voluptatum, hic sit nihil repudiandae veritatis voluptatibus aut officiis. Iure, dolore blanditiis. Possimus cumque labore in magni repellendus beatae itaque rerum aliquid corporis? Natus magnam magni quisquam nam amet, earum qui? Quidem voluptatibus cum, beatae, corrupti hic saepe fugit quos rem asperiores eum non soluta amet quis autem ipsum alias perferendis voluptates magnam voluptatum labore doloribus molestiae praesentium minus molestias. Praesentium blanditiis maiores voluptate obcaecati, doloribus tempora explicabo quisquam laboriosam voluptatum voluptates velit, atque ut? Vero inventore suscipit magnam soluta aspernatur accusantium iure, quia debitis! Nam earum corporis quia laudantium ut excepturi tempora itaque exercitationem sit quidem ratione ullam, natus error commodi amet non optio enim fugit illum corrupti tenetur vero sunt dolor. Deleniti impedit id ratione similique illum voluptas magnam minus dolorem omnis explicabo autem, aut inventore at, perspiciatis debitis! Quidem dolore, amet at voluptatem temporibus et eos eligendi ab quae veritatis ducimus libero tenetur dignissimos totam sequi nam? Laudantium, dolorum exercitationem in tempore nostrum id, minima voluptatum aliquid odio quibusdam obcaecati quasi?`,
        }

    ];

    let currentBlog = document.querySelector('.blog');
    currentBlog.querySelector('.date__day').textContent = blogs[0].date;
    currentBlog.querySelector('.blog__blog-title').textContent = blogs[0].title;
    currentBlog.querySelector('.author').textContent = blogs[0].author;
    currentBlog.querySelector('.blog__text').textContent = blogs[0].text;

    let recentPosts = document.querySelectorAll('.recent-posts__item');
    
    for (let i = 0; i < recentPosts.length; i++) {
        recentPosts[i].querySelector('.recent-posts__description').textContent = blogs[i+1].description;
        recentPosts[i].querySelector('.recent-posts__author').textContent = blogs[i+1].author;

        recentPosts[i].addEventListener('click', function() {
            for (let j = 0; j < blogs.length; j++) {

                if (this.getAttribute('data-id') === blogs[j].id) {

                    let currentId = currentBlog.getAttribute('data-id');
                    
                    currentBlog.setAttribute('data-id', blogs[j].id);
                    currentBlog.querySelector('.date__day').textContent = blogs[j].date;
                    currentBlog.querySelector('.blog__blog-title').textContent = blogs[j].title;
                    currentBlog.querySelector('.author').textContent = blogs[j].author;
                    currentBlog.querySelector('.blog__text').textContent = blogs[j].text;

                        for (let k = 0; k < blogs.length; k++) {
                            if (blogs[k].id === currentId) {
                                
                                this.setAttribute('data-id', blogs[k].id);
                                this.querySelector('.recent-posts__description').textContent = blogs[k].description;
                                this.querySelector('.recent-posts__author').textContent = blogs[k].author;

                                document.querySelector('.recent-posts__list').insertAdjacentElement('afterBegin', this);

                                break;
                            }
                        }
                    
                    break;
                }
            }
        });
    }