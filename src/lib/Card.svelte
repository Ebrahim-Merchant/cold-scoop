<script>
    export let imageSrc;
    export let imageTitle;
</script>

<div {...$$props } class="max-w-fit sm:max-w-[232px] bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg" src={imageSrc} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <p class="text-xl font-bold tracking-tight text-gray-900">{imageTitle}</p>
        </a>
    </div>
</div>
